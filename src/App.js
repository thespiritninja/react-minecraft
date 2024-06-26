import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import './App.css';
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";
import UI from "./components/UI";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <UI />
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
