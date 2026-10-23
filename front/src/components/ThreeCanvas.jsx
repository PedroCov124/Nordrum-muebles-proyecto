import {useRef, useEffect} from 'react';
import * as THREE from 'three';
import { loadObject } from '../utils/objectLoader';
import { cleanScene } from '../utils/cleanScene';
import { cameraMovement, cameraRotation } from '../utils/cameraMovement'


function ThreeCanvas(){
    const reference = useRef(null);

    useEffect(() =>{
        if(reference.current){
            reference.current.innerHTML = '';
        }

        const worldObjects = [];

        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth *.6, window.innerHeight * .6);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcccccc);
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5;
        camera.position.y = 1.8;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);


        loadObject("guitar chair", scene, worldObjects);
        loadObject("greydon desk", scene, worldObjects);
        loadObject("asymmetric modern shelf", scene, worldObjects);
        
        cameraRotation(camera, renderer.domElement);
        const cMovement = cameraMovement(camera);
        //TODO: modularizar un poco más la funcion useEffect
        
        
        
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