export const vertex = `
    uniform float uAmplitude;
    uniform float uWaveLength;
    uniform float uTime;

    void main(){
        vec3 newPosition = position;
        float zWave = uAmplitude * sin(position.x * uWaveLength + uTime);
        float xWave = uAmplitude * sin(position.y * uWaveLength + uTime);
        newPosition.z += zWave;
        newPosition.z += xWave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`

export const fragment = `
    void main(){
        gl_FragColor = vec4(1., 1., 1., 1.);
    }
`