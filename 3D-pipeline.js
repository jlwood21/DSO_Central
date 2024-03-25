// Initialize the scene, camera, and renderer with transparency enabled
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ensure background transparency

// Set up the renderer size and attach it to the container
const container = document.getElementById("threeD-pipeline-container");
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.style.background = 'none'; // Ensure the container has no background
container.style.border = 'none'; // Remove any border from the container
container.appendChild(renderer.domElement);

// Function to create a stage with specific parameters
function createStage(color, position, rotation) {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    const material = new THREE.MeshBasicMaterial({ color });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(position.x, position.y, position.z);
    cylinder.rotation.set(rotation.x, rotation.y, rotation.z);
    scene.add(cylinder);
    return cylinder;
}

// Create the pipeline stages and position them
const radius = 5; // Radius of the overall shape
const stages = [];
const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xffffff, 0x000000]; // Example colors for each stage

for (let i = 0; i < 8; i++) {
    const angle = Math.PI * 2 * (i / 8);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * (i % 2 === 0 ? 1 : -1); // Alternate y to form the shape
    const z = 0; // All stages at the same z-plane
    const rotation = new THREE.Vector3(0, 0, (i % 2 === 0 ? 1 : -1) * Math.PI / 2); // Rotate alternate cylinders

    stages.push(createStage(colors[i], new THREE.Vector3(x, y, z), rotation));
}

// Adjust the camera position to view the entire shape
camera.position.z = 15;

// Animation loop to rotate the object
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate each stage around the z-axis
    stages.forEach((stage, index) => {
        stage.rotation.z += (index % 2 === 0 ? 0.01 : -0.01); // Rotate alternate stages in different directions
    });

    renderer.render(scene, camera);
};

// Start the animation
animate();
