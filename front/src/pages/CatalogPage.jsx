import NavBarPages from "../components/NavBarPages";
import SectionNotAvailable from '../assets/nordrum_seccion_no_disponible.png'
import SectionNotAvailableAlt from '../assets/nordrum_seccion_no_disponibleMobile.png'

function CatalogPage(){
    return(
        <div>
            <NavBarPages/>
            <div id="imageContainer"><img src={(window.innerWidth / window.innerHeight) <= 1.2 ? SectionNotAvailableAlt : SectionNotAvailable} alt="" id="imageContainer_image"/></div>
        </div>
    );
}


export default CatalogPage
