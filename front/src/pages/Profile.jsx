import NavBarPages from "../components/NavBarPages";
import './profile.css'
import User from '../assets/user.png'
import PlaceHolder from '../assets/place_holder.png'

function Profile(){
    return(
        <div id="profilePageContainer">
            <NavBarPages id="profileNavBar"/>
            
            <div id="profilePage">
                <div id="profile">
                    <img src={User} alt="" />

                    <span className="divisionLine"></span>

                    <div id="profile_data">
                        <h3>Nombre de usuario: </h3>
                        <p>Nombre de usuario</p>
                        <h3>Email</h3>
                        <p>correo@correo.com</p>
                        <button>Editar</button>
                    </div>
                    

                    <span className="divisionLine"></span>

                    <button id="deleteAccount">Eliminar cuenta</button>
                </div>
        
                <div id="designs">
                    <h1>Diseños</h1>
                    
                    <ul id="designsContainer">
                        <li className="designsItem">
                            <img src={PlaceHolder} alt="" />
                            <div>
                                <p>Diseño</p>
                            </div>
                        </li>
                        <li className="designsItem">
                            <img src={PlaceHolder} alt="" />
                            <div>
                                <p>Diseño</p>
                            </div>
                        </li>
                        <li className="designsItem">
                            <img src={PlaceHolder} alt="" />
                            <div>
                                <p>Diseño</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Profile