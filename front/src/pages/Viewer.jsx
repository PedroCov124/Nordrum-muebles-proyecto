import { BrowserRouter, Link, Routes } from "react-router-dom";
import './viewer.css'
import Catalog from '../components/Catalog.jsx'
import { useState } from "react";

function Viewer(){
    const isMobile = window.innerWidth <= 1000;
    const [displayed, setDisplay] = useState(0);

    return(
        <div id="viewerPageContainer">
            {isMobile ?
                <nav id="navBar_viewer">
                    <Link to="/"><img src="/logo_nordrum_alt.png" alt="" id="alt_logo"/></Link>

                    <Link to="/profile"><img src="/user.png" alt="" id="user_image"/></Link>
                    <div id="navBar_texts">
                        <h1>Título del diseño <img src="pencil.png" alt="" /></h1>
                        <div id="navBar_editButtons">
                            <p>Archivo</p>
                            <p>Editar</p>
                        </div>
                    </div>
                </nav>
                :
                <nav id="navBar_viewer">
                    <Link to="/"><img src="/logo_nordrum_alt.png" alt="" id="alt_logo"/></Link>

                    <div id="navBar_texts">
                        <h1>Título del diseño</h1>
                        <div id="navBar_editButtons">
                            <p>Archivo</p>
                            <p>Editar</p>
                        </div>
                    </div>
                    
                    <Link to="/profile"><img src="/user.png" alt="" id="user_image"/></Link>
                </nav>
            }

            <div id="viewerContainer">
                <div id="viewer"></div>
                {isMobile ?
                    <div id="catalogContainer">
                        <img src="slideIcon.png" id="catalog_slideIcon" onClick={()=>{displayed == 0 ? setDisplay(1) : setDisplay(0)}}></img>
                        <Catalog id={displayed == 0 ? 'undisplayedCatalog' : 'displayedCatalog'}/>
                    </div>
                    :
                    <Catalog id={'catalogMenu'}/>
                }
            </div>
        </div>
    );
}


export default Viewer
