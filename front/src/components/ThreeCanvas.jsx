import {useRef, useEffect} from 'react';
import * as THREE from 'three';


function ThreeCanvas(){
    const reference = useRef(null);

    useEffect(() =>{
        if(reference.current){
            reference.current.innerHTML = '';
        }

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.6 / window.innerHeight * 0.6, 0.1, 1000)
        camera.position.z = 5;

        renderer.render(scene, camera);


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
        <div ref={reference} style={{backgroundColor: 'red', width: 'fit-content'}}></div>
    )
}

export default ThreeCanvas