import './logLayout.css'
import {Link} from "react-router-dom"

function SignUpLayout(){
    return(
    <form className="formLayout" id='formLayoutUp'>
        <h1>Registrarse</h1>
        <p id='formLayout_message'>Tienes una cuenta? <Link to="/sign/in">Inicia sesión</Link></p>

        <label htmlFor="user">Nombre de usuario</label>
        <input type="text" name="user" id="user" required/>

        <label htmlFor="email">Mail</label>
        <input type="email" name="email" id="email" autoComplete="eimal" required/>

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" required/>

        <input type='submit' value="Registrarse" id='submitButtonUp'></input>
    </form>)
}

export default SignUpLayout