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
        w: {pressed: false, speed: -0.2},
        a: {pressed: false, speed: -0.2},
        s: {pressed: false, speed: 0.2},
        d: {pressed: false, speed: 0.2}
    }
    console.log(keys['w'].pressed)

    document.addEventListener('pointerlockchange', ()=>{
        locked = !locked;
        
        if (locked){
            document.addEventListener('keydown', handleKeyHold);
            document.addEventListener('keyup', handleKeyUp)
        } else{
            document.removeEventListener('keydown', handleKeyHold);
            document.removeEventListener('keyup', handleKeyUp)
        }
    })

    const cameraMovementLock = (e)=>{
        
        for (let k in keys){
            if (e.key === k){
                keys[k].pressed = !keys[k].pressed;
            }
        }

        console.log(keys)
    }

    let intervalo;
    
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
                camera.position.z += keys[k].speed;
            } else if ((k.toString() === 'a' || k.toString() === 'd') && keys[k].pressed){
                camera.position.x += keys[k].speed;
            }
        }
    }

    return {updateMovement}
}