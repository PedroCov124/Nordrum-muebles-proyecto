import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ThreeCanvas from './components/ThreeCanvas'
import NavBarPages from './components/NavBarPages'
import Catalog from './components/Catalog'
import Branches from './components/Branches'
import Viewer from './components/Viewer'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/catalogo' element={<Catalog />}></Route>
        <Route path='/sedes' element={<Branches />}></Route>
        <Route path='/visor' element={<Viewer />}></Route>
      </Routes>
    </>
  )
}

export default App
