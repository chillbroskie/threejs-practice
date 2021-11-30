import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const tours = new THREE.Mesh( geometry, material);

scene.add(tours);

function animate() {
  requestAnimationFrame( animate );

  tours.rotation.x += 0.01;
  tours.rotation.y += 0.005;
  tours.rotation.z += 0.01;


  renderer.render(scene, camera);
}

animate()