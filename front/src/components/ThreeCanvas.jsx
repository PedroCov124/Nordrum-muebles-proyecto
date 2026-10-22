import {useRef, useEffect} from 'react';
import * as THREE from 'three';
import { MTLLoader} from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { loadObject } from '../utils/objectLoader';
import { cleanScene } from '../utils/cleanScene';
import { cameraMovement, cameraRotation } from '../utils/cameraMovement'


function ThreeCanvas(){
    const reference = useRef(null);

    useEffect(() =>{
        if(reference.current){
            reference.current.innerHTML = '';
        }

        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcccccc);
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5;
        camera.position.y = 1;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);


        loadObject("guitar chair", scene);
        loadObject("80s pool chair", scene);

        
        cameraRotation(camera, renderer.domElement);
        const cMovement = cameraMovement(camera);
        //TODO: agregar el movimiento con las teclas
        //TODO: modularizar un poco más la funcion useEffect
        //TODO: modificar la funcion loadObject para normalizar los tamaños de los modelos
        
        
        
        var animationID;
        const clock = new THREE.Timer();

        const animate = () => {
            animationID = requestAnimationFrame(animate);

            cMovement.updateMovement();

            renderer.render(scene, camera);
        };
        animate();

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