import * as THREE from 'three'


export function footerThree(canvas: HTMLCanvasElement): void {

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(65, w / h)
    camera.position.z = 14
    camera.position.y = 3
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
    renderer.setSize(w, h)

    const loader = new THREE.TextureLoader();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const getRandomStarPosition = (particleCount: number) => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            arr[i] = (Math.random() - 0.5) * 500;
        }
        return arr;
    };

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(getRandomStarPosition(3000), 3));

    const starMaterial = new THREE.PointsMaterial({
        size: 0.05,
        map: loader.load("/star.png"),
        transparent: true
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    function tick() {

        stars.rotation.y -= 0.0001
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