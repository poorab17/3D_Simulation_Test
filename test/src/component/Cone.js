import React from 'react';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Extend necessary objects
extend({ Mesh: THREE.Mesh, ConeGeometry: THREE.ConeGeometry, MeshStandardMaterial: THREE.MeshStandardMaterial });

const ConeComponent = ({ height, radius }) => {
  return (
    <mesh>
      <coneGeometry args={[radius, height, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default ConeComponent;
