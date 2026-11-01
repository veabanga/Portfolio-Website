import  { useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Homeinfo from '../components/Homeinfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustPLaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [0.55, 0.55, 0.55];
      screenPosition = [0.5, -0.8, 2.2];
    } else {
      screenScale = [0.65, 0.65, 0.65];
      screenPosition = [0.8, 0, 2.2];
    }
    return [screenScale, screenPosition];
  }

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -0.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -1, 0];
    }
    return [screenScale, screenPosition];
  }

  const [planeScale, planePosition] = adjustPLaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
      <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center  justify-center'>
          {currentStage && <Homeinfo currentStage = {currentStage}/> }
        </div>
        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far:20000 }}
        >
        <Suspense fallback={<Loader />}>

          <directionalLight position={ [10, 1, 1]} intensity={[2]} />
          <ambientLight intensity={[0.5]}/>
          {/* <pointLight/> dont need it cause we have daylight or sunlight */}
          {/* <spotLight/> similar to pointlight, i.e emits from one direction but in shape of cone..so we can add angle */}
          <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" 
          intensity={1}/>

          {/* <Bird /> */}
          <Sky isRotating={isRotating} />
          <Island
            position = {islandPosition}
            scale = {islandScale}
            rotation = {[0.1, 4.7077, 0]}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          <Plane
            position = {planePosition}
            scale = {planeScale}
            isRotating = {isRotating}
            rotation = {[0, 20, 0]}
          />
        </Suspense>
        </Canvas>
      </section>
  );
};

export default Home;
