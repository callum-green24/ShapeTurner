import { useState } from 'react'

function Input() {
  const [rotateAngle, setRotateAngle] = useState(0)

  const handleRotation = (newRotation: number) => {
    setRotateAngle(newRotation)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRotateAngle(Number.parseInt(event.target.value))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault()

  return (
    <>
      <p>asdasdasdasdasd</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          name="angle"
          id="angle"
          value=""
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Input
