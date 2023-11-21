import { useState } from 'react'

import './App.css'
import MockControl from './components/MockControl'
import config from './config'

function App() {
  const [lauchData, setLauchData] = useState([])

  const fetchSpaceXData = async () => {
    const response = await fetch(`${config.api.baseUrl}/launches/latest`)
    const data = await response.json()
    console.log(data)
    setLauchData(data)
  }

  const clearData = () => {
    setLauchData([])
  }
  return (
    <>
      <h2>Fetch SpaceX data</h2>
      <div>
        <button onClick={fetchSpaceXData}>Fetch SpaceX Launches</button>
        <button onClick={clearData}>Clear</button>
      </div>
      <pre>{JSON.stringify(lauchData, null, 2)}</pre>

      <MockControl />
    </>
  )
}

export default App
