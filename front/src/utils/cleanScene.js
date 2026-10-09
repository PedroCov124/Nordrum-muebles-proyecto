export function cleanScene(scene){
    scene.traverse((object) => {
        if (object.geometry) {
            object.geometry.dispose();
        }

        if (object.material) {
            const materials = Array.isArray(object.material) ? object.material : [object.material];

            materials.forEach((material) => {
                for (const value of Object.values(material)) {
                    if (value?.isTexture) {
                        value.dispose();
                    }
                }

                material.dispose();
            });
        }
    });

    scene.clear();
}