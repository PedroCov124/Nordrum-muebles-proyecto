import * as THREE from 'three'

export function normalizeObjectSize(object, objectList){
    object.updateMatrixWorld(true);

    const hitBox = new THREE.Box3().setFromObject(object);
    const size = hitBox.getSize(new THREE.Vector3());

    const scale = 1 / size.y;
    object.scale.multiplyScalar(scale);

    object.updateMatrixWorld(true);
    hitBox.setFromObject(object);

    const center = hitBox.getCenter(new THREE.Vector3());

    object.position.x -= center.x;
    object.position.y -= hitBox.min.y;
    object.position.z -= center.z;

    object.updateMatrixWorld(true);
}