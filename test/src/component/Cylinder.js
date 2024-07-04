import React from 'react';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Extend necessary objects
extend({ Mesh: THREE.Mesh, CylinderGeometry: THREE.CylinderGeometry, MeshStandardMaterial: THREE.MeshStandardMaterial });

const CylinderComponent = ({ height, radius }) => {
  return (
    <mesh>
      <cylinderGeometry args={[radius, radius, height, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default CylinderComponent;
