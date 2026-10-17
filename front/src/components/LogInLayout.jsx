import './logLayout.css'
import {Link} from "react-router-dom"

function LogInLayout(){
    return(
    <form className="formLayout">
        <h1>Iniciar sesion</h1>
        <p id='formLayout_message'>No tienes una cuenta? <Link to="/sign/up">Crea una!</Link></p>

        <label htmlFor="user">Usuario o mail</label>
        <input type="text" name="user" id="user" required/>

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" required/>

        <input type='submit' value="Iniciar sesión"></input>
    </form>)
}

export default LogInLayout