<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvas.value) {
    const scene = new THREE.Scene()
    const POV = 75
    const ASPECT_RATIO = window.innerWidth / window.innerHeight
    const VIEW_FRUSTUM = [0.1, 1000]
    const camera = new THREE.PerspectiveCamera(POV, ASPECT_RATIO, VIEW_FRUSTUM[0], VIEW_FRUSTUM[1])
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(30)
    renderer.render(scene, camera)

    // Torus

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshStandardMaterial({ color: 0x4338ca })
    const torus = new THREE.Mesh(geometry, material)

    scene.add(torus)

    // Lights

    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(5, 5, 5)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, ambientLight)

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24)
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
      const star = new THREE.Mesh(geometry, material)

      const [x, y, z] = Array(3).map(() => THREE.MathUtils.randFloatSpread(100))

      star.position.set(x, y, z)
      scene.add(star)
    }

    Array(200).forEach(addStar)

    // Scroll Animation
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top
      torus.rotation.x += 0.05
      torus.rotation.y += 0.075
      torus.rotation.z += 0.05

      camera.position.z = t * -0.01
      camera.position.x = t * -0.0002
      camera.rotation.y = t * -0.0002
    }

    document.body.onscroll = moveCamera
    moveCamera()

    // Animation Loop

    function animate() {
      requestAnimationFrame(animate)

      torus.rotation.x += 0.01
      torus.rotation.y += 0.005
      torus.rotation.z += 0.01

      // controls.update();
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
