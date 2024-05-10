import { useState } from 'react'

function Spinner() {
  const [rotation, setRotation] = useState(0)

  const rotateImage = (direction: string) => {
    if (direction === 'clockwise') {
      setRotation(rotation + 45)
    } else {
      setRotation(rotation - 45)
    }
  }

  return (
    <div>
      <img
        src="./client/images/stop.png"
        alt="Spinner"
        style={{ transform: `rotate(${rotation}deg)` }}
        onClick={() => rotateImage('clockwise')}
        onContextMenu={(e) => {
          e.preventDefault()
          rotateImage('anticlockwise')
        }}
      />
    </div>
  )
}

export default Spinner
