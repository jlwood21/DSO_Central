// Initialize the scene, camera, and renderer with transparency enabled
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ensure background transparency

// Set up the renderer size and attach it to the container
const container = document.getElementById('threeD-pipeline-container');
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.style.background = 'none'; // Ensure the container has no background
container.style.border = 'none'; // Remove any border from the container
container.appendChild(renderer.domElement);

// Define an infinity loop shape (lemniscate of Bernoulli) with an increased scale
function lemniscateOfBernoulli(t, a) {
  // The parameter t ranges from 0 to 2*PI, a is the scale of the lemniscate
  const x = (a * Math.cos(t)) / (1 + Math.pow(Math.sin(t), 2));
  const y = (a * Math.sin(t) * Math.cos(t)) / (1 + Math.pow(Math.sin(t), 2));
  return new THREE.Vector3(x, y, 0);
}

// Create a path from the lemniscate points with an increased size
const curve = new THREE.CurvePath();
const points = [];
const scale = 30; // Increase the scale by 50% for a larger infinity loop
for (let t = 0; t < 2 * Math.PI; t += 0.1) {
  points.push(lemniscateOfBernoulli(t, scale));
}
const lemniscatePath = new THREE.Path(points);
curve.add(lemniscatePath);

// Function to create a stage with specific parameters
function createStage(color, position) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color });
    const box = new THREE.Mesh(geometry, material);
    box.position.copy(position);
    scene.add(box);
    return box;
}

// Create the pipeline stages and position them along the curve
points.forEach((point, index) => {
    const hue = (index / points.length) * 360;
    const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
    createStage(color, point);
});

// Adjust the camera position to ensure the larger shape fits within the view
camera.position.set(0, 0, 90); // Adjust as needed for the best view of the larger shape

// Animation loop to rotate the object
const animate = () => {
    requestAnimationFrame(animate);

    // Spin the whole infinity shape
    scene.rotation.y += 0.005;

    renderer.render(scene, camera);
};

// Start the animation
animate();
