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

// Create an infinity loop path
const curve = new THREE.CurvePath();
const leftLoop = new THREE.EllipseCurve(0, 0, 5, 10, Math.PI, 3 * Math.PI, false, 0);
const rightLoop = new THREE.EllipseCurve(0, 0, 5, 10, 0, 2 * Math.PI, false, 0);
curve.add(new THREE.Path(leftLoop.getPoints(50)));
curve.add(new THREE.Path(rightLoop.getPoints(50)));

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
const points = curve.getPoints(100);
const stages = points.map((point, index) => {
    const color = new THREE.Color(`hsl(${(index / points.length) * 360}, 100%, 50%)`);
    return createStage(color, new THREE.Vector3(point.x, point.y, 0));
});

// Adjust the camera position to view the entire shape
camera.position.z = 30;

// Animation loop to rotate the object
const animate = () => {
    requestAnimationFrame(animate);

    // Spin the whole infinity shape
    scene.rotation.y += 0.005;

    renderer.render(scene, camera);
};

// Start the animation
animate();
