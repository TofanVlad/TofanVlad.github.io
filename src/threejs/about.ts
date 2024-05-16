import * as THREE from "three";
import { vertex, fragment } from "./utils/waveShader";
import { ref } from "vue";

export function aboutThree(canvas: HTMLCanvasElement): void {

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(65, w / h)
    camera.position.z = 8.5
    camera.position.y = 1.5
    camera.rotation.x = 0.2
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
    renderer.setSize(w, h)


    const uniforms = ref({
        uTime: { value: 0 },
        uAmplitude: { value: 0.25 },
        uWaveLength: { value: 1 },
    })

    const planeGeo = new THREE.PlaneGeometry(32, 12, 64, 8)
    const planeMat = new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, wireframe: true, uniforms: uniforms.value })

    const plane = new THREE.Mesh(planeGeo, planeMat)
    plane.rotation.y = (Math.PI / 180) * 180
    plane.rotation.x = (Math.PI / 180) * 90

    scene.add(plane)

    function tick() {
        uniforms.value.uTime.value += 0.025
        renderer.render(scene, camera)
        requestAnimationFrame(tick)
    }

    window.addEventListener("resize", () => {
        canvas.style.width = '100vw'
        canvas.style.height = '100vh'

        const w = canvas.offsetWidth
        const h = canvas.offsetHeight
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(w, h);
        renderer.render(scene, camera);

    });

    tick();
}