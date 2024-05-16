import * as THREE from 'three'

export function headerThree(canvas: HTMLCanvasElement): void {

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(65, w / h)
    camera.position.z = 14
    camera.position.y = 2
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true })

    renderer.setSize(w, h)


    const loader = new THREE.TextureLoader();

    const geo = new THREE.SphereGeometry(4, 96, 96)
    const mat = new THREE.PointsMaterial({
        alphaMap: loader.load("/earthspec1k_inverted.jpg"),
        alphaHash: true,
        color: 0xf0f0f0,
        size: 0.02,
        opacity: 0.7,
    })


    const mesh = new THREE.Points(geo, mat)
    scene.add(mesh)

    camera.lookAt(mesh.position)


    const getRandomStarPosition = (particleCount: number) => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            arr[i] = (Math.random() - 0.5) * 25;
        }
        return arr;
    };

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(getRandomStarPosition(1000), 3));

    const starMaterial = new THREE.PointsMaterial({
        size: 0.05,
        map: loader.load("/star.png"),
        transparent: true
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)


    function tick() {
        renderer.setPixelRatio(window.devicePixelRatio);

        stars.rotation.y -= 0.0001
        mesh.rotation.y += 0.001

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