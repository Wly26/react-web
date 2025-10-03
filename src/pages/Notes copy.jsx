// import React, { useEffect, useRef } from "react";
import React from "react";

export default function Notes() {

    // const mountRef = useRef(null);

    // useEffect(() => {
    //   // Importing Three.js components dynamically
    //   const THREE = require("three");

    //   // Create scene
    //   const scene = new THREE.Scene();
    //   scene.background = new THREE.Color(0xf0f0f0);

    //   // Create camera
    //   const camera = new THREE.PerspectiveCamera(
    //     75,
    //     mountRef.current.clientWidth / mountRef.current.clientHeight,
    //     0.1,
    //     1000
    //   );
    //   camera.position.z = 5;

    //   // Create renderer
    //   const renderer = new THREE.WebGLRenderer({ antialias: true });
    //   renderer.setSize(
    //     mountRef.current.clientWidth,
    //     mountRef.current.clientHeight
    //   );
    //   renderer.setClearColor(0xf0f0f0, 1);
    //   mountRef.current.appendChild(renderer.domElement);

    //   // Create a cube
    //   const geometry = new THREE.BoxGeometry(2, 2, 2);
    //   const material = new THREE.MeshBasicMaterial({
    //     color: 0x007bff,
    //     wireframe: true,
    //   });
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);

    //   // Add lighting
    //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    //   scene.add(ambientLight);

    //   const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    //   directionalLight.position.set(1, 1, 1);
    //   scene.add(directionalLight);

    //   // Animation function
    //   const animate = () => {
    //     requestAnimationFrame(animate);

    //     // Rotate the cube
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;

    //     renderer.render(scene, camera);
    //   };

    //   // Start animation
    //   animate();

    //   // Handle resize
    //   const handleResize = () => {
    //     if (mountRef.current) {
    //       camera.aspect =
    //         mountRef.current.clientWidth / mountRef.current.clientHeight;
    //       camera.updateProjectionMatrix();
    //       renderer.setSize(
    //         mountRef.current.clientWidth,
    //         mountRef.current.clientHeight
    //       );
    //     }
    //   };

    //   window.addEventListener("resize", handleResize);

    //   // Clean up function
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //     if (mountRef.current && renderer.domElement) {
    //       mountRef.current.removeChild(renderer.domElement);
    //     }
    //     renderer.dispose();
    //   };
    // }, []);
  return (
    <div>
      <h3>Notes</h3>
      <div
        // ref={mountRef}
        style={{
          width: "100%",
          minHeight: "500px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
