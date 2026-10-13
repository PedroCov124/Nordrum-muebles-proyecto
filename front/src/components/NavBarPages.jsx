import { BrowserRouter, Link, Routes } from "react-router-dom";


function NavBarPages(){
    return(
        <nav>
            <Link to="/"><img src="../../public/logo_nordrum.png" alt="" /></Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/sedes">Sedes</Link>
            <Link to="/visor">Visor 3D</Link>
        </nav>
    );
}


export default NavBarPages