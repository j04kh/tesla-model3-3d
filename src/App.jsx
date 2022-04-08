import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Logo from "./assets/teslaLogo.svg?component";
import Specs from "./components/Specs";
import Spinner from "./components/Spinner";

function App() {
  const Model = lazy(() => import("./components/Model3/Model"));

  return (
    <div className="h-full min-h-screen w-screen flex items-center relative pt-2 px-6 overflow-x-hidden box-border bg-black text-white">
      <Logo className="absolute left-5 top-2" />
      <div className="h-full w-full flex flex-col sm:flex-row">
        <div className="w-full min-h-[400px] h-1/2 mt-5 relative sm:pt-24 sm:h-[500px]">
          <div className="absolute w-full h-full">
            <Suspense fallback={<Spinner />}>
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

                <Model position={[0, 0, 0]} />
                <OrbitControls />
              </Canvas>
            </Suspense>
          </div>
        </div>
        <Specs />
      </div>
    </div>
  );
}

export default App;
