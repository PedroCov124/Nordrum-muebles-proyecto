import NavBarPages from "../components/NavBarPages";
import ErrorImage from '../assets/nordrum_error.png';
import ErrorImageMobile from '../assets/nordrum_errorMobile.png';


function HomePage(){
    return(
        <div>
            <NavBarPages/>
            <div id="imageContainer"><img src={(window.innerWidth / window.innerHeight) <= 1.2 ? ErrorImageMobile : ErrorImage} alt="" id="imageContainer_image"/></div>
        </div>
    );
}


export default HomePage
