import { Engine } from 'complex-engine';
import MyScene from './Scene';

const cx = Engine.getInstance();
cx.useScene(new MyScene());

function render() {
    cx.update();
    requestAnimationFrame(render);
}

requestAnimationFrame(render);
