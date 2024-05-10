import { useState } from 'react'
interface Props {
  angle: number
}

function Spinner(props: Props) {
  const [angle, setAngle] = useState(0)

  const rotateImage = (direction: string) => {
    if (direction === 'clockwise') {
      setAngle(angle + props.angle)
    } else {
      setAngle(angle - props.angle)
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
