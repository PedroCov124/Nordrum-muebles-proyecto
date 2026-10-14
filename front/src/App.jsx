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
import './components/basics.css'
import './components/NavBarPages.css'
import './components/HomePage.css'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/catalogo' element={<Catalog />}></Route>
        <Route path='/sedes' element={<Branches />}></Route>
        <Route path='/visor' element={<Viewer />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </>
  )
}

export default App
