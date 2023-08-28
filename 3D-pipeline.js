document.addEventListener("DOMContentLoaded", function() {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);
  
    // Create the geometry and material for the pipeline
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const torus = new THREE.Mesh(geometry, material);
  
    // Add the pipeline to the scene
    scene.add(torus);
  
    // Position the camera
    camera.position.z = 50;
  
    // Animation function
    function animate() {
      requestAnimationFrame(animate);
  
      // Rotate the pipeline
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
  
      renderer.render(scene, camera);
    }
  
    // Start the animation
    animate();
  });
  