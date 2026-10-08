import {useRef, useEffect} from 'react';
import * as THREE from 'three';


function ThreeCanvas(){
    const reference = useRef(null);

    useEffect(() =>{
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);

        if(reference.current){
            reference.current.innerHTML = '';
        }

        reference.current.appendChild(renderer.domElement);

        //Para limpiar el canvas cuando React recarga los elementos
        return() =>{
            renderer.dispose();

            if(reference.current){
                reference.current.innerHTML = '';
            }
        };
    }, []);

    return(
        <div ref={reference} style={{backgroundColor: 'red'}}></div>
    )
}

export default ThreeCanvas