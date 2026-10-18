import { BrowserRouter, Link, Routes } from "react-router-dom";
import './viewer.css'
import Catalog from '../components/Catalog.jsx'

function Viewer(){
    return(
    <div id="viewerPageContainer">
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

        <div id="viewerContainer">
            <div id="viewer"></div>
            <Catalog />
        </div>
    </div>
    );
}


export default Viewer
