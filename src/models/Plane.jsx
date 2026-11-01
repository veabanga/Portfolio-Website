import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        scene.traverse((object) => {
            if (object.isMesh) {
                object.renderOrder = 1;
                const materials = Array.isArray(object.material)
                    ? object.material
                    : [object.material];
                materials.forEach((material) => {
                    material.depthTest = false;
                    material.depthWrite = false;
                });
            }
        });
    }, [scene]);

    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref} >
        <primitive object = {scene} />
    </mesh>
  )
}

export default Plane;
