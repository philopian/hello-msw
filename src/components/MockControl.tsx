import { Power, PowerOff } from 'lucide-react'
import { useState } from 'react'

import { worker } from '../mocks/browser'

export default function MockControl() {
  const [mockEnabled, setMockEnabled] = useState<boolean>(getLocalStorage('MSW'))

  const handleToggleMsw = () => {
    if (mockEnabled) {
      setLocalStorage('false')
      setMockEnabled(false)
      worker.stop()
    } else {
      setLocalStorage('true')
      setMockEnabled(true)
      worker.start()
    }
  }

  return (
    <>
      {mockEnabled && <div className="mswEnabled"> MOCK SERVICE WORKER is ON!</div>}

      <div className="msw-toggle">
        <button onClick={handleToggleMsw}>{mockEnabled ? <Power /> : <PowerOff />}</button>
      </div>
    </>
  )
}

function setLocalStorage(value: string) {
  window.localStorage.setItem('MSW', value)
}

function getLocalStorage(value: string) {
  return !!window.localStorage.getItem(value)
}
