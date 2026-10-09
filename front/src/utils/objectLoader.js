import * as THREE from 'three';
import { MTLLoader} from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';


export async function loadObject(fileName, scene){
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    const texture = await mtlLoader.loadAsync(`/modelosPrueba/${fileName}.mtl`);
    objLoader.setMaterials(texture);

    const object = await objLoader.loadAsync(`/modelosPrueba/${fileName}.obj`);

    scene.add(object);
}