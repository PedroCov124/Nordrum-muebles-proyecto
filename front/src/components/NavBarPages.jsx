import { useState } from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";


function NavBarPages({id}){
    const isMobile = window.innerWidth <= 1000;
    const [displayed, setDisplay] = useState(0);

    return(
        <nav className="navBar" id={id}>
            <Link to="/" className=""><img src="../../public/logo_nordrum.png" alt="" id="logo"/></Link>
            {isMobile ? 
                <div id="slideMenuContainer">
                    <img src="slideIcon.png" id="navBar_slideIcon" onClick={()=>{displayed == 0 ? setDisplay(1) : setDisplay(0)}}></img>
                    <div id={displayed == 0 ? 'undisplayedMenu' : 'displayedMenu'}>
                        <Link to="/catalogo" className="navBar_element">Catálogo</Link>
                        <Link to="/sedes" className="navBar_element">Sedes</Link>
                        <Link to="/visor" className="navBar_element">Visor 3D</Link>
                        <Link to="/profile" className="navBar_element"><img src="../../public/user.png" alt="" id="navBar_userProfile"/></Link>
                        <Link to="/sign/in" className="navBar_element">Iniciar sesion</Link>
                    </div>
                </div> :
                <div id="navBar_slideMenu">
                    <Link to="/catalogo" className="navBar_element">Catálogo</Link>
                    <Link to="/sedes" className="navBar_element">Sedes</Link>
                    <Link to="/visor" className="navBar_element">Visor 3D</Link>
                    <Link to="/profile" className="navBar_element"><img src="../../public/user.png" alt="" id="navBar_userProfile"/></Link>
                    <Link to="/sign/in" className="navBar_element">Iniciar sesion</Link>
                </div>
            }
            
        </nav>
    );
}


export default NavBarPages