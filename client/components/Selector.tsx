import { useState } from 'react'

function Selector() {
  const [selectedImage, setSelectedImage] = useState('')
  const changeImage = (imageName) => {
    console.log(selectedImage)
    setSelectedImage(
      imageName === './images/triaangle2.png'
        ? '..]/images/stop.png'
        : '../images/triaangle2.png',
    )
  }

  return (
    <div id="selector">
      <button type="button" id="toggle" onClick={changeImage}>
        {' '}
        Change Image
      </button>
      <div>
        <img id="image" src={selectedImage} alt="" />
      </div>
      {/* <button
        type="button"
        id="triangle"
        onClick={() => changeImage('../images/triaangle2.png')}
      >
        triaangle2
      </button>
      <button
        type="button"
        id="octogon"
        onClick={() => changeImage('../images/stop.png')}
      >
        stop
      </button> */}
    </div>
  )
}

export default Selector
