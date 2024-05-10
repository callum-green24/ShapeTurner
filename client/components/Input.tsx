import { useState } from 'react'

interface Props {
  angle: number
  setAngle(angle: number): void
}

function Input(props: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange', event.target.value)
    if (Number(event.target.value) > 360)
      return alert('Angle is not between 0 and 360')
    props.setAngle(Number(event.target.value))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('handleSubmit', props.angle)
  }

  return (
    <>
      <div id="form">
        <p>{props.angle}</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="number"
            name="angle"
            id="angle"
            value={props.angle}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Input
