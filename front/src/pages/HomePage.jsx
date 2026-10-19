import NavBarPages from "../components/NavBarPages";


function HomePage(){
    return(
        <div>
            <NavBarPages/>
            <div id="imageContainer"><img src={(window.innerWidth / window.innerHeight) <= 1.2 ? '/nordrum_errorMobile.png' : '/nordrum_error.png'} alt="" id="imageContainer_image"/></div>
        </div>
    );
}


export default HomePage
