import React from 'react';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Extend necessary objects
extend({ Mesh: THREE.Mesh, BoxGeometry: THREE.BoxGeometry, MeshStandardMaterial: THREE.MeshStandardMaterial });

const CubeComponent = ({ side }) => {
  return (
    <mesh>
      <boxGeometry args={[side, side, side]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default CubeComponent;
