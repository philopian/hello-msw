import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import './App.css'
import MockControl from './components/MockControl'
import config from './config'

export default function App() {
  const [launchData, setLaunchData] = useState(null)

  const fetchSpaceXData = async () => {
    const response = await fetch(`${config.api.baseUrl}/launches/latest`)
    const data = await response.json()
    setLaunchData(data)
  }

  const clearData = () => setLaunchData(null)

  return (
    <>
      <h2>Fetch SpaceX data</h2>
      <div>
        <button onClick={fetchSpaceXData}>Fetch SpaceX Launches</button>
        <button onClick={clearData}>
          <Trash2 size={16} />
        </button>
      </div>
      {launchData && <pre>{JSON.stringify(launchData, null, 2)}</pre>}

      <MockControl />
    </>
  )
}
