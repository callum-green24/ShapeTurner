import { useState } from 'react'

function Input() {
  const [rotateAngle, setRotateAngle] = useState(1)

  const handleRotation = (newRotation: number) => {
    setRotateAngle(newRotation)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange', event.target.value)
    if (Number(event.target.value) > 360)
      return alert('Angle is not between 0 and 360')

    setRotateAngle(Number.parseInt(event.target.value))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('handleSubmit', rotateAngle)
    setRotateAngle(1)
  }

  return (
    <>
      <p>{rotateAngle}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          name="angle"
          id="angle"
          value={rotateAngle}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Input
