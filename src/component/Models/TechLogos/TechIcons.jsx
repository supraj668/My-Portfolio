/**
 * 1. Loads the '.glb' model (GLTF format)
 * 2. Add basic lighting
 * 3. Applies environment reflections for realism
 * 4. Wraps the model in a floating animation
 * 5. Optionally tweaks the material (like setting a white color on a specific mesh)
 * 6. Disable zoom using "OrbitControls"
 */

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function TechIcons({ model }) {
  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[12, 5, 5]} intensity={2} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5} rotationIntensity={0.3} floatIntensity={0.8}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
}
