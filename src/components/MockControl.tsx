import { Power, PowerOff } from 'lucide-react'
import { useEffect, useState } from 'react'

import { worker } from '../mocks/browser'

const styles = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
}
export default function MockControl() {
  const [mockEnabled, setMockEnabled] = useState(false)

  useEffect(() => {
    if (mockEnabled) {
      setLocalStorage('true')
      worker.start()
    } else {
      setLocalStorage('false')
      worker.stop()
    }
  }, [mockEnabled, setMockEnabled])

  return (
    <>
      {mockEnabled && <div className="mswEnabled"> MOCK SERVICE WORKER is ON!</div>}

      <div style={styles}>
        <button onClick={() => setMockEnabled(!mockEnabled)}>
          {mockEnabled ? <Power /> : <PowerOff />}
        </button>
      </div>
    </>
  )
}

function setLocalStorage(value) {
  localStorage.setItem('MSW', value)
}
