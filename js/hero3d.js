/* ==========================================================================
   HERO 3D — signature wireframe orb (echoes the avatar from the intro)
   Loaded as an ES module; fails silently if Three.js can't load (offline).
   ========================================================================== */
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 7);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const SIGNAL = 0x4de8c0;
  const FLARE = 0xff5a3c;
  const BONE = 0xf2f1ed;

  const group = new THREE.Group();
  scene.add(group);

  /* Core wireframe icosahedron */
  const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
  const coreMat = new THREE.MeshBasicMaterial({ color: SIGNAL, wireframe: true, transparent: true, opacity: 0.55 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  /* Faint inner solid for depth */
  const innerGeo = new THREE.IcosahedronGeometry(1.9, 1);
  const innerMat = new THREE.MeshBasicMaterial({ color: 0x0b0b10, transparent: true, opacity: 0.85 });
  group.add(new THREE.Mesh(innerGeo, innerMat));

  /* Outer thin ring accent */
  const ringGeo = new THREE.TorusGeometry(3, 0.006, 8, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: FLARE, transparent: true, opacity: 0.5 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2.6;
  group.add(ring);

  /* Scattered particles */
  const particleCount = 140;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i += 1) {
    const r = 3.4 + Math.random() * 2.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({ color: BONE, size: 0.03, transparent: true, opacity: 0.5 });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  /* Pointer parallax */
  let targetX = 0;
  let targetY = 0;
  window.addEventListener('pointermove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
    targetY = (e.clientY / window.innerHeight - 0.5) * 0.6;
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (!reduceMotion) {
      group.rotation.y = t * 0.18 + targetX;
      group.rotation.x = t * 0.08 + targetY;
      particles.rotation.y = -t * 0.05;
      ring.rotation.z = t * 0.12;
      core.scale.setScalar(1 + Math.sin(t * 0.9) * 0.015);
    }
    renderer.render(scene, camera);
  }
  animate();
}
