import {useRef, useEffect} from 'react';
import * as THREE from 'three';
import { MTLLoader} from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';


function ThreeCanvas(){
    const reference = useRef(null);

    useEffect(() =>{
        if(reference.current){
            reference.current.innerHTML = '';
        }

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcccccc);
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth * 0.6 / window.innerHeight * 0.6, 0.1, 1000)
        camera.position.z = 5;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);


        const objLoader = new OBJLoader();
        const mtlLoader = new MTLLoader();

        const loadChair = async ()=> {
            const texturaSilla = await mtlLoader.loadAsync("/modelosPrueba/80s pool chair.mtl");
            objLoader.setMaterials(texturaSilla);

            const eightiesChair = await objLoader.loadAsync('/modelosPrueba/80s pool chair.obj');
            eightiesChair.scale.setScalar(0.02);

            //TODO: la silla se ve estirada por alguna razón y bastante pixelada
            scene.add(eightiesChair);
        }

        loadChair();
        

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