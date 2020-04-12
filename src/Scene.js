import { Scene } from 'complex-engine';
import { THREEComponent, THREESystem } from 'complex-threejs';
import * as THREE from 'three';

export default class MyScene extends Scene {
    constructor() {
        super('MyScene');
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
    }

    load() {
        // Setup your environment here
        // add entities, systems and managers to the this.world instance
        this.world.addVoidSystem(new THREESystem(this.camera));
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        this.world.createEntity([
            new THREEComponent(cube)
        ]);
    }
}
