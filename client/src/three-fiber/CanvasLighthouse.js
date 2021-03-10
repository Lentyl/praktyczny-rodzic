import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Lighthouse = () => {
  const { nodes, animations } = useLoader(
    GLTFLoader,
    "/the_lonely_lighthouse/scene.gltf"
  );


  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());

  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    console.log(mixer);
    mixer.clipAction(animations[0], actions.current).play();
  }, []);
  return (
    <group dispose={null} ref={actions} name="lighthouse">
      <primitive object={nodes.OSG_Scene} />
    </group>
  );
};

const CanvasLighthouse = () => {
  return (
    <div className="lighthouse">
      <Canvas
        camera={{ position: [-15, 0, 5] }}
        className="lighthouse-canvas"
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={1} />

        <spotLight
          intensity={0.8}
          position={[-20, 10, 10]}
          angle={0.4}
          penumbra={1}
          castShadow
        />

        <Suspense fallback={null}>
          <Lighthouse />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasLighthouse;
