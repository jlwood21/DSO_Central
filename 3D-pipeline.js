// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();

// Set renderer size and append to container
renderer.setSize(window.innerWidth, window.innerHeight);
document
  .getElementById("threeD-pipeline-container")
  .appendChild(renderer.domElement);

// Create pipeline components
function createPipeline() {
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  ];

  const group = new THREE.Group();

  for (let i = 0; i < 3; i++) {
    // Create cylinder to represent a pipeline stage
    const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    const cylinder = new THREE.Mesh(cylinderGeometry, materials[i]);
    cylinder.position.set(i * 30, 0, 0);
    group.add(cylinder);

    if (i < 2) {
      // Create sphere to represent a transition or action
      const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
      const sphere = new THREE.Mesh(sphereGeometry, materials[i]);
      sphere.position.set(i * 30 + 15, 0, 0);
      group.add(sphere);
    }
  }

  return group;
}

// Add pipeline to scene
const pipeline = createPipeline();
scene.add(pipeline);

// Camera position
camera.position.z = 100;

// Animation
function animate() {
  requestAnimationFrame(animate);

  pipeline.rotation.x += 0.01;
  pipeline.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Execute animation
animate();
