// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Set renderer size and append to container
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("threeD-pipeline-container").appendChild(renderer.domElement);

// Create geometry and material
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create mesh and add to scene
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Set camera position
camera.position.z = 50;

// Animation function
const animate = function () {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// Run animation
animate();
