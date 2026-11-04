import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { HomeLoader } from '../components/Loader'
import Island, { FIRST_STAGE_ANGLE } from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Homeinfo from '../components/Homeinfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showNavigationHint, setShowNavigationHint] = useState(true);
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const { active, loaded, total } = useProgress();

  const handleInteraction = () => setShowNavigationHint(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!active && total > 0 && loaded >= total) {
      setIsSceneReady(true);
    }
  }, [active, loaded, total]);

  const adjustPLaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(isMobile){
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0.35, -0.15, 1.8];
    } else {
      screenScale = [0.65, 0.65, 0.65];
      screenPosition = [0.8, 0, 2.2];
    }
    return [screenScale, screenPosition];
  }

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if(isMobile){
      screenScale = [1.9, 1.9, 1.9];
      screenPosition = [0, -0.8, 0];
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
        {isSceneReady && (
          <div className='pointer-events-none absolute top-40 left-0 right-0 z-10 flex items-center justify-center sm:top-28'>
            {currentStage && (
              <Homeinfo
                currentStage={currentStage}
                showNavigationHint={showNavigationHint}
              />
            )}
          </div>
        )}
        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far:20000 }}
        >
        <Suspense fallback={null}>

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
            rotation = {[0.1, FIRST_STAGE_ANGLE, 0]}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
            onInteraction = {handleInteraction}
          />
          <Plane
            position = {planePosition}
            scale = {planeScale}
            isRotating = {isRotating}
            rotation = {[0, 20, 0]}
          />
        </Suspense>
        </Canvas>
        {!isSceneReady && <HomeLoader />}
      </section>
  );
};

export default Home;
