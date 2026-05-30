import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      
      {/* 1. Ambient Light: Very dark, desaturated base to ensure deep shadows */}
      <ambientLight 
        intensity={0.1} // Much lower intensity
        color="#282030" // Dark, desaturated purple/gray
      />

      {/* 2. Key Light (Bright Neutral/Cool White): High intensity, simulating a bright window. */}
      <directionalLight 
        position={[6, 8, 5]} // High and to the side
        intensity={3.5} // High intensity for a bright, clean key light
        color="#e6f0ff" // Very light, slightly cool white
        castShadow
      />

      {/* 3. Rim/Fill Light (Subtle Cool Blue): Low intensity, opposite side, to lift shadows 
          and provide a hint of the cool color that contrasts your warm-purple background.
      */}
      <directionalLight
        position={[-6, 5, -5]} // Opposite side for fill/rim
        castShadow
        intensity={1.0} // Medium intensity
        color="#a0dfff" // Light, soft blue
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground Plane: Stays dark to maintain the moody contrast */}
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#1f1828" /> {/* Even darker ground color */}
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;