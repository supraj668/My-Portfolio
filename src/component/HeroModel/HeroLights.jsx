import * as THREE from 'three';


export default function HeroLights() {
  const backgroundHue = 0x1a1423; // Your dark background color for reference

  return (
    <>
      {/* 1. Ambient Light: Very low intensity, set to a dark color 
        that matches or complements the background for a cohesive, dark base.
      */}
      <ambientLight 
        intensity={0.2} 
        color="#2a2433" // Darker, desaturated purple/gray to match the mood
      />
      
      {/* 2. Key Light (Cool/Blue-White): High intensity, positioned 
        to act as the main light source, giving definition.
        Cool colors (cyan/ice blue) provide excellent contrast to the warm-purple background.
      */}
      <spotLight
        position={[4, 5, 4]} // Adjusted position for a key light
        angle={0.4}
        penumbra={0.3}
        color="#5e72ff" // A vibrant electric blue for strong contrast
        intensity={150} // Increased intensity to act as the main light
        castShadow
      />

      {/* 3. Fill Light (Warm/Complementary): Lower intensity, opposite side, 
        to fill in shadows and provide a color contrast (warm against cool key light). 
        A pink/magenta tone pulls the deep-purple from the background.
      */}
      <spotLight
        position={[-3, 5, -5]} // Opposite side for fill
        angle={0.5}
        penumbra={0.5}
        color="#ff5e72" // A warm, saturated magenta/pink
        intensity={80} // Medium intensity
      />

      {/* 4. Accent Light (White/Neutral): Clean, bright accent for highlights.
        This provides a neutral point of reference and a crisp highlight.
      */}
      <spotLight
        position={[-5, 5, 2]}
        angle={0.2}
        penumbra={0.1}
        color="white" 
        intensity={100} 
      />

      {/* 5. Point Light (Subtle Glow): Low intensity point light 
        to add a small internal glow or an additional accent.
      */}
      <pointLight 
        position={[0, 1, 0]}
        intensity={15} // Low but noticeable
        color="#ff5e72" // Re-using the warm magenta for consistency
      />

      {/* 6. RectAreaLight (Optional Accent): Kept your RectAreaLight, 
        but changed the color to a soft gold/amber, which is a warmer 
        complementary color to the dark purple background.
      */}
      <primitive 
        object={new THREE.RectAreaLight('#FFC94A', 8, 3, 2)}
        position={[1, 3, 4]} 
        intensity={10} 
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
    </>
  );
}