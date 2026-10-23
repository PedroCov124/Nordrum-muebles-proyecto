import { useParams } from "react-router-dom"
import { div } from "three/src/nodes/math/OperatorNode.js";
import LogInLayout from "../components/LogInLayout";
import SignUpLayout from "../components/SignUpLayout";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import './logPage.css'
import Logo from '../assets/logo_nordrum.png'

function LogPage(){
    const { state } = useParams(); 

    return (
        <div id="logPageContainer">
            <Link to="/"><img src={Logo} alt="" id="logoLogPage"/></Link>
            {state == 'in' ? <LogInLayout/> : <SignUpLayout/>}
        </div>
    )
}

export default LogPage