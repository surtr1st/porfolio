<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvas.value) {
    const POV = 90
    const ASPECT_RATIO = window.innerWidth / window.innerHeight
    const VIEW_FRUSTUM = [0.1, 1000]
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(POV, ASPECT_RATIO, VIEW_FRUSTUM[0], VIEW_FRUSTUM[1])
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(100)
    renderer.render(scene, camera)

    // Particular
    const particleGeometry = new THREE.BufferGeometry()
    const particleGeometry2 = new THREE.BufferGeometry()
    const particleCount = 5000
    const positions = new Float32Array(particleCount * 3)
    const positions2 = new Float32Array(particleCount * 3)

    // X-Y-Z
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 1000
      positions2[i] = (Math.random() - 0.5) * 1000
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3))

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.7,
      transparent: true,
      color: 0x686de0,
    })
    const pointsDiffMaterial = new THREE.PointsMaterial({
      size: 0.5,
      transparent: true,
      color: 0x3d65f5,
    })
    const particleMesh = new THREE.Points(particleGeometry, pointsMaterial)
    const particleMeshDiff = new THREE.Points(particleGeometry2, pointsDiffMaterial)
    scene.add(particleMesh)
    scene.add(particleMeshDiff)

    // Lights
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(5, 5, 5)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, ambientLight)

    // Scroll Animation
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top

      camera.position.z = t * -0.1
      camera.position.x = t * -0.002
      camera.rotation.y = t * -0.0002
    }

    document.body.onscroll = moveCamera
    moveCamera()

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate)

      particleMesh.rotation.x += 0.001
      particleMesh.rotation.y += 0.0001
      particleMesh.rotation.z += 0.0001

      particleMeshDiff.rotation.x -= 0.001
      particleMeshDiff.rotation.y -= 0.001
      particleMeshDiff.rotation.z -= 0.001

      renderer.render(scene, camera)
    }

    animate()
  }
})
</script>

<template>
  <canvas
    ref="canvas"
    class="fixed top-0 left-0"
  ></canvas>
</template>
