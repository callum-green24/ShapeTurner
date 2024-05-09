import { createRoot } from 'react-dom/client'
//import Rotate from './components/Input.tsx'
import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<App />)
})

//document.getElementById("image")?.onclick=
