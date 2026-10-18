import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ThreeCanvas from './components/ThreeCanvas'
import CatalogPage from './pages/CatalogPage'
import Branches from './pages/Branches'
import Viewer from './pages/Viewer'
import HomePage from './pages/HomePage'
import './components/basics.css'
import './components/NavBarPages.css'
import './pages/HomePage.css'
import Profile from './pages/Profile'
import LogPage from './pages/LogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/catalogo' element={<CatalogPage />}></Route>
        <Route path='/sedes' element={<Branches />}></Route>
        <Route path='/visor' element={<Viewer />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/sign/:state' element={<LogPage />}></Route>
      </Routes>
    </>
  )
}

export default App
