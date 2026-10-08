import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ThreeCanvas from './components/ThreeCanvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThreeCanvas></ThreeCanvas>
    </>
  )
}

export default App
