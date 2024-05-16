import * as THREE from 'three'
import spline from './utils/spline'

export function stackThree(canvas: HTMLCanvasElement): void {

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0e0e0e, 0.5)

    const camera = new THREE.PerspectiveCamera(65, w / h)
    camera.position.z = 14
    camera.position.y = 3
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
    renderer.setSize(w, h)

    const tubeWidth = 0.5
    const tubeGeo = new THREE.TubeGeometry(spline, 256, tubeWidth, 16, true);

    const edges = new THREE.EdgesGeometry(tubeGeo, 0.25)
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff })
    const tubeLines = new THREE.LineSegments(edges, lineMat)

    scene.add(tubeLines)

    const outerGeo = new THREE.TubeGeometry(spline, 256, tubeWidth + 0.01, 16, true)
    const outerMat = new THREE.MeshBasicMaterial({ color: 0x0e0e0e, side: THREE.BackSide })

    const outerTube = new THREE.Mesh(outerGeo, outerMat)
    scene.add(outerTube)



    function updateCamera(clock: number): void {
        const time = clock * 0.05
        const loopTime = 10 * 1000
        const t = (time % loopTime) / loopTime
        const pos = tubeGeo.parameters.path.getPointAt(t)
        const lookAt = tubeGeo.parameters.path.getPointAt((t + 0.025) % 1)
        camera.position.copy(pos)
        camera.lookAt(lookAt)
    }

    function tick(t = 0) {

        updateCamera(t)
        renderer.render(scene, camera)
        requestAnimationFrame(tick)
    }

    window.addEventListener("resize", () => {
        canvas.style.width = '100%'
        canvas.style.height = '100%'

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