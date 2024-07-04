import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { DoubleSide, MeshStandardMaterial, SphereGeometry } from 'three'; // Import from 'three'
import { useMemo } from 'react';

function SphereComponent() {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
  });

  // Define the materials
  const materials = useMemo(
    () => [
      new MeshStandardMaterial({ color: 'blue', side: DoubleSide }),
      new MeshStandardMaterial({ color: 'red', side: DoubleSide })
    ],
    []
  );

  // Create a custom geometry with groups
  const createCustomSphere = () => {
    const geometry = new SphereGeometry(3, 20, 20); // Use SphereGeometry from 'three'
    geometry.groups = [];

    for (let i = 0; i < geometry.index.count; i += 6) {
      geometry.groups.push({
        start: i,
        count: 6,
        materialIndex: i % 12 === 0 ? 0 : 1  // Alternate materials
      });
    }

    return geometry;
  };

  return (
    <mesh ref={sphereRef} geometry={createCustomSphere()} material={materials} />
  );
}

export default SphereComponent;