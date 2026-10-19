import NavBarPages from "../components/NavBarPages";

function CatalogPage(){
    return(
        <div>
            <NavBarPages/>
            <div id="imageContainer"><img src={(window.innerWidth / window.innerHeight) <= 1.2 ? '/nordrum_seccion_no_disponibleMobile.png' : '/nordrum_seccion_no_disponible.png'} alt="" id="imageContainer_image"/></div>
        </div>
    );
}


export default CatalogPage
