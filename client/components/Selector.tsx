import { useState } from 'react'
import App from './App'

function Selector() {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = ['./client/images/triaangle2.png', './client/images/stop.png']

  const changeImage = (imageName) => {
    console.log(selectedImage)
    setSelectedImage(
      imageName == './client/images/triaangle2.png'
        ? './client/images/stop.png'
        : './client/images/triaangle2.png',
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
    </div>
  )
}

export default Selector
