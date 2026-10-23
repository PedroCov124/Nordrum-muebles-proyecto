import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

export function cameraRotation(camera, renderer){
    const controls = new PointerLockControls(camera, renderer);

    renderer.addEventListener('click', ()=>{
        controls.lock();
    });
}


export function cameraMovement(camera){
    var locked = false;
    var keys = {
        w: {pressed: false, speed: -0.05},
        a: {pressed: false, speed: -0.05},
        s: {pressed: false, speed: 0.05},
        d: {pressed: false, speed: 0.05}
    }
    console.log(keys['w'].pressed)

    document.addEventListener('pointerlockchange', ()=>{
        locked = !locked;
        
        if (locked){
            document.addEventListener('keydown', handleKeyHold);
            document.addEventListener('keyup', handleKeyUp);
        } else{
            document.removeEventListener('keydown', handleKeyHold);
            document.removeEventListener('keyup', handleKeyUp);
        }
    })

    const handleKeyHold = (e)=>{
        let pressedKey = e.key.toLowerCase();

        keys[pressedKey].pressed = true;
    }

    const handleKeyUp = (e)=>{
        let pressedKey = e.key.toLowerCase();

        keys[pressedKey].pressed = false;
    }

    const updateMovement = ()=>{
        for (let k in keys){
            if ((k.toString() === 'w' || k.toString() === 's') && keys[k].pressed){
                camera.translateZ(keys[k].speed);
            } else if ((k.toString() === 'a' || k.toString() === 'd') && keys[k].pressed){
                camera.translateX(keys[k].speed);
            }
        }

        camera.position.y = 1.8;
    }

    return {updateMovement}
}