import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';


const Sky = ({isRotating}) => {

  const skyRef = useRef();

  const sky = useGLTF(skyScene);

  useEffect(() => {
    sky.scene.traverse((object) => {
      if (object.isMesh) {
        object.renderOrder = -1;
        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        materials.forEach((material) => {
          material.depthWrite = false;
        });
      }
    });
  }, [sky.scene]);

  useFrame(( _,delta )=>{
    if(isRotating){
      skyRef.current.rotation.y += 0.15 * delta;
    }
  })
  return (
    <mesh ref = {skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
