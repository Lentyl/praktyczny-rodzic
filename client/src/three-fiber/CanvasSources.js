import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Stork = () => {
  const { nodes, animations } = useLoader(GLTFLoader, "/stork/scene.gltf");

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());

  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    mixer.clipAction(animations[0], actions.current).play();
  }, []);

  return (
    <group dispose={null} ref={actions} name="book__model">
      <primitive object={nodes.OSG_Scene} />
    </group>
  );
};

const CanvasSources = () => {
  return (
    <div className="book">
      <Canvas
        camera={{ position: [0.2, -0.5, -2] }}
        className="book-canvas"
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={0.8} />
        <spotLight
          intensity={0.6}
          position={[1, 6, -4]}
          angle={0.4}
          penumbra={1}
          castShadow
        />

        <Suspense fallback={null}>
          <Stork />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasSources;
