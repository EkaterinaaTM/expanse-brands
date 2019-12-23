import * as THREE from 'three';
import * as dat from 'dat.gui';

export default function Canvas() {
  const canvas = document.querySelector('#c');
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setClearColor(0x0a030f);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // камера
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    5000,
  );
  camera.position.set(100, 0, 1000);

  const scene = new THREE.Scene();

  // источник света
  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  // генерация точек
  function createSpace() {
    const dots = new THREE.Object3D();

    for (let i = 0; i < 2000; i++) {
      const circleGeometry = new THREE.SphereGeometry(12, 12, 12);
      const material = new THREE.MeshPhongMaterial({
        color: 0x9c67d0,
        shading: THREE.FlatShading,
      });
      const circle = new THREE.Mesh(circleGeometry, material);
      material.side = THREE.DoubleSide;

      const distance = 500;

      const dot = {
        positionY: Math.random() * -distance * 6,
        positionX: Math.random() * -distance * 60,
      };
      circle.position.x = dot.positionX;
      circle.position.y = dot.positionY;

      dots.add(circle);
    }

    dots.position.x = 7000;
    dots.position.y = 900;
    dots.position.z = -2000;

    scene.add(dots);
  }

 
  createSpace();
  renderer.render(scene, camera);

  // // const gui = new dat.GUI();
  // // gui
  // //   .add(ball, 'positionX')
  // //   .min(-5)
  // //   .max(5)
  // //   .step(0.1);
  // // gui
  // //   .add(ball, 'positionY')
  // //   .min(-5)
  // //   .max(5)
  // //   .step(0.1);
  // // gui
  // //   .add(ball, 'positionZ')
  // //   .min(-5)
  // //   .max(5)
  // //   .step(0.1);
}

// ball.rotationY = time;
// ball.positionY = time;
// dot.position.x += ball.positionX;
// dot.position.y += ball.positionY;
// dot.position.z += ball.positionZ;
