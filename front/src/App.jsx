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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarPages />

      <Routes>
        <Route path='/' element={<NavBarPages />}></Route>
        <Route path='/Catálogo' element={<Catalog />}></Route>
        <Route path='/Sedes' element={<Branches />}></Route>
        <Route path='/Visor' element={<Viewer />}></Route>
      </Routes>
    </>
  )
}

export default App
