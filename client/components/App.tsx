import { useState } from 'react'
import Input from './Input'
import Selector from './Selector'
import Spinner from './Spinner'

function App() {
  const [angle, setAngle] = useState(45)

  return (
    <>
      <h1>the coolest shape spinner</h1>
      <h2>you wanna be cooool? then spin the shapes</h2>
      <div id="container">
        <div>
          <Input angle={angle} setAngle={setAngle} />
          <Selector />
        </div>
        <Spinner angle={angle} />
      </div>
    </>
  )
}

export default App
