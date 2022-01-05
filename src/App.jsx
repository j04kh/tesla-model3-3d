import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logo from "./assets/teslaLogo.svg?component";
import Specs from "./components/Specs";
import Model from "./components/Model3/Model";

function App() {
  return (
    <div className="h-full min-h-screen w-screen pt-2 px-6 overflow-x-hidden box-border bg-black text-white">
      <Logo className="absolute" />
      <div className="h-full w-full flex flex-col sm:flex-row">
        <div className="w-full min-h-[400px] h-1/2 mt-5 relative sm:pt-24 sm:h-[500px]">
          <div className="absolute w-full h-full">
            <Canvas
              camera={{
                fov: 35,
                zoom: 1.2,
                far: 10000,
                position: [1200, 100, 0],
              }}
            >
              <ambientLight intensity={0.3} />
              <pointLight intensity={1.2} position={[150, 120, -60]} />
              <pointLight intensity={1.2} position={[0, 300, 0]} />
              <Suspense fallback={null}>
                <Model position={[0, 0, 0]} />
                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <Specs />
      </div>
    </div>
  );
}

export default App;
