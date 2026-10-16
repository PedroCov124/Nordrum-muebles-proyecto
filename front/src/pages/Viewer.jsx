import { BrowserRouter, Link, Routes } from "react-router-dom";
import './viewer.css'
import MenuCatalogo from '../components/MenuCatalogo.jsx'

function Viewer(){
    return(
    <div id="viewerContainer">
        <nav id="navBar_viewer">
            <Link to="/"><img src="/public/logo_nordrum_alt.png" alt="" id="alt_logo"/></Link>

            <div id="navBar_texts">
                <h1>Título del diseño</h1>
                <div id="navBar_editButtons">
                    <p>Archivo</p>
                    <p>Editar</p>
                </div>
            </div>
            
            <Link to="/profile"><img src="/public/user.png" alt="" id="user_image"/></Link>
        </nav>

        <MenuCatalogo></MenuCatalogo>
    </div>);
}


export default Viewer
