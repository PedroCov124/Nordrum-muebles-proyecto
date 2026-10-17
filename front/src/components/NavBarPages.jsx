import { BrowserRouter, Link, Routes } from "react-router-dom";



function NavBarPages(){
    return(
        <nav id="navBar">
            <Link to="/" className="navBar_element"><img src="../../public/logo_nordrum.png" alt="" id="logo"/></Link>
            <Link to="/catalogo" className="navBar_element">Catálogo</Link>
            <Link to="/sedes" className="navBar_element">Sedes</Link>
            <Link to="/visor" className="navBar_element">Visor 3D</Link>
            <Link to="/profile" className="navBar_element"><img src="../../public/user.png" alt="" id="navBar_userProfile"/></Link>
            <Link to="/sign/in" className="navBar_element">Iniciar sesion</Link>
        </nav>
    );
}


export default NavBarPages