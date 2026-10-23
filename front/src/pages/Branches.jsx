import NavBarPages from "../components/NavBarPages";
import SectionNotAvailable from '../assets/nordrum_seccion_no_disponible.png'
import SectionNotAvailableMobile from '../assets/nordrum_seccion_no_disponibleMobile.png'

function Branches(){
    return(
        <div>
            <NavBarPages/>
            <div id="imageContainer"><img src={(window.innerWidth / window.innerHeight) <= 1.2 ? SectionNotAvailableMobile : SectionNotAvailable} alt="" id="imageContainer_image"/></div>
        </div>
    );
}


export default Branches
