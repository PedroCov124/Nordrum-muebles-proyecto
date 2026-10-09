import {useRef, useEffect} from 'react';
import * as THREE from 'three';
import { MTLLoader} from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { loadObject } from '../utils/objectLoader';
import { cleanScene } from '../utils/cleanScene';


function ThreeCanvas(){
    const reference = useRef(null);

    useEffect(() =>{
        if(reference.current){
            reference.current.innerHTML = '';
        }

        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth * .6, window.innerHeight * .6);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcccccc);
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5;
        camera.position.y = 1;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);


        loadObject("guitar chair", scene);
        loadObject("80s pool chair", scene);

        const controls = new PointerLockControls(camera, renderer.domElement);

        //TODO: agregar el movimiento con las teclas
        //TODO: modularizar un poco más la funcion useEffect
        //TODO: modificar la funcion loadObject para normalizar los tamaños de los modelos
        renderer.domElement.addEventListener('click', () =>{
            controls.lock();
        })
        
        
        var animationID;
        const animar = () => {
            animationID = requestAnimationFrame(animar);
            renderer.render(scene, camera);
        };
        animar();

        reference.current.appendChild(renderer.domElement);

        //Para limpiar el canvas cuando React recarga los elementos
        return() =>{
            renderer.dispose();
            cleanScene(scene);
            scene.dispose();
            camera.dispose();
            ambientLight.dispose();

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