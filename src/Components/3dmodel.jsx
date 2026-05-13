import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Burger() {
  const model = useGLTF("/src/assets/burger.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // AUTO ROTATE (smooth)
      ref.current.rotation.y += 0.01;

      // floating effect
      ref.current.position.y = -1 + Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={30}
      position={[0, -1, 0]}
    />
  );
}

const FoodModel = () => {
  return (
    <div className="w-full h-100 bg-white overflow-hidden -mt-80 ">
      <Canvas camera={{ position: [3, 5, 5] }}>
        {/* Lights */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* 3D Model */}
        <Burger />
      </Canvas>
    </div>
  );
};

export default FoodModel;
