import Input from './Input'
import Selector from './Selector'
import Spinner from './Spinner'

function App() {
  return (
    <>
      <h1>the coolest shape spinner</h1>
      <h2>you wanna be cooool? then spin the shapes</h2>
      <div id="container">
        <div>
          <Input />
          <Selector />
        </div>
        <Spinner />
      </div>
    </>
  )
}

export default App
