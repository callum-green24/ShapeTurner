import { useState } from 'react'
import Input from './Input'
import Selector from './Selector'
import Spinner from './Spinner'

function App() {
  const [angle, setAngle] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  // const images = ['./client/images/triaangle2.png', './client/images/stop.png']

  return (
    <>
      <h1>the coolest shape spinner</h1>
      <h2>you wanna be cooool? then spin the shapes</h2>
      <div id="container">
        <div>
          <Input angle={angle} setAngle={setAngle} />
          <Selector image={selectedImage} />
        </div>
        <Spinner angle={angle} setAngle={setAngle} xxx={selectedImage} />
      </div>
    </>
  )
}

export default App
