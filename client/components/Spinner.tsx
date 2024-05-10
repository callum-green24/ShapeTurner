import { useState } from 'react'
import App from './App'

// interface Props {
//   angle: number
//   setAngle(): void
// }

function Spinner({ angle, setAngle }) {
  // const [angle, setAngle] = useState(0)

  const rotateImage = (direction: string) => {
    if (direction === 'clockwise') {
      setAngle(angle + 45)
    } else {
      setAngle(angle - 45)
    }
  }

  return (
    <div>
      <img
        src="./client/images/stop.png"
        alt="Spinner"
        style={{ transform: `rotate(${angle}deg)` }}
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
