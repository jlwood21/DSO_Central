// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Get the container element and set renderer size
const container = document.getElementById('threeD-pipeline-container');
renderer.setSize(container.offsetWidth, container.offsetHeight);

// Attach the renderer to the container
container.appendChild(renderer.domElement);

// Create a geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a mesh and add it to the scene
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene with the camera
  renderer.render(scene, camera);
};

// Start the animation
animate();
