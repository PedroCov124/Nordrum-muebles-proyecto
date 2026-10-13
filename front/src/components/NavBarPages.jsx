import { BrowserRouter, Link, Routes } from "react-router-dom";


function NavBarPages(){
    return(
        <div>
            <nav>
                <Link to="/"><img src="../../public/logo_nordrum.png" alt="" /></Link>
                <Link to="/Catálogo">Catálogo</Link>
                <Link to="/Sedes">Sedes</Link>
                <Link to="/Visor">Visor 3D</Link>
            </nav>
        </div>
    );
}


export default NavBarPages