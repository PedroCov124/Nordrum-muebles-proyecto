import { useState } from "react"

function Catalog(){

    const [menu, setMenu] = useState('menu_catalog');
    const [active, setActive] = useState(1);
    const [dropdown, setDrowdown] = useState(0);
    //TODO: hacer el menu catalogo

    return (

        <div id="catalogMenu">
            <div id="catalogMenu_buttons">
                <p id={active == 1 ? 'active' : ''} className="catalogButton" onClick={
                    ()=> {
                        setMenu('menu_catalog');
                        setActive(1);
                    }
                }>Catalogo</p>
                <p id={active == 2 ? 'active' : ''} className="recommendationsButton" onClick={
                    ()=> {
                        setMenu('menu_recommendations');
                        setActive(2);
                    }
                }>Recomendaciones</p>
            </div>

            <div id="catalogMenu_selectors">
                <form action="">
                    <label htmlFor="typeSelect">Tipo:</label>
                    <select name="" id="typeSelect" defaultValue="">
                        {/*TODO: reemplazar las opciones por las que haya en la base de datos cuando la haga */}
                        <option value="" hidden>Seleccione tipo</option>
                        <option value="Tipo 1">Tipo 1</option>
                        <option value="Tipo 2">Tipo 2</option>
                        <option value="Tipo 3">Tipo 3</option>
                        <option value="Tipo 4">Tipo 4</option>
                    </select>
                </form>
                <form action="">
                    <label htmlFor="styleSelect" id="styleLabel">Estilo:</label>
                    <select name="" id="styleSelect" defaultValue="">
                        {/*TODO: reemplazar las opciones por las que haya en la base de datos cuando la haga */}
                        <option value="" hidden>Seleccione estilo</option>
                        <option value="Estilo 1">Estilo 1</option>
                        <option value="Estilo 2">Estilo 2</option>
                        <option value="Estilo 3">Estilo 3</option>
                        <option value="Estilo 4">Estilo 4</option>
                    </select>
                </form>
            </div>

            <h2 id="opciones">Opciones</h2>

            {menu === 'menu_catalog' ? 
                //TODO: Reemplazar ambos menus por su correspondiente de la base de datos
                <ul id="catalog">
                    <li>
                        <img src="/place_holder.png" alt="" />
                        <p>Mueble</p>
                    </li>
                    <li>
                        <img src="/place_holder.png" alt="" />
                        <p>Mueble</p>
                    </li>
                    <li>
                        <img src="/place_holder.png" alt="" />
                        <p>Mueble</p>
                    </li>
                    <li>
                        <img src="/place_holder.png" alt="" />
                        <p>Mueble</p>
                    </li>
                    <li>
                        <img src="/place_holder.png" alt="" />
                        <p>Mueble</p>
                    </li>
                </ul>
                : 
                <ul id="catalog">
                    <li>
                        <img src="/place_holder.png" alt="" />
                        <p>Mueble</p>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Catalog