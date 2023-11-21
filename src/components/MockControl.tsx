import { Power, PowerOff } from 'lucide-react'
import { useEffect, useState } from 'react'

import { worker } from '../mocks/browser'

const MSW_KEY = 'MSW'

function useMockControl() {
  const [mockEnabled, setMockEnabled] = useState(
    JSON.parse(window.localStorage.getItem(MSW_KEY) || 'false'),
  )

  useEffect(() => {
    if (mockEnabled) {
      worker.start()
    } else {
      worker.stop()
    }
  }, [mockEnabled])

  const handleToggleMsw = () => {
    if (mockEnabled) {
      window.localStorage.setItem(MSW_KEY, JSON.stringify(false))
      setMockEnabled(false)
      worker.stop()
    } else {
      window.localStorage.setItem(MSW_KEY, JSON.stringify(true))
      setMockEnabled(true)
      worker.start()
    }
  }

  return {
    mockEnabled,
    handleToggleMsw,
  }
}

export default function MockControl() {
  const { mockEnabled, handleToggleMsw } = useMockControl()

  return (
    <>
      {mockEnabled && <div className="mswEnabled"> MOCK SERVICE WORKER is ON!</div>}
      <div className="msw-toggle">
        <button onClick={handleToggleMsw}>{mockEnabled ? <Power /> : <PowerOff />}</button>
      </div>
    </>
  )
}
