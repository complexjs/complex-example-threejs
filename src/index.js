import { Engine } from 'complex-engine';
import MyScene from './Scene';

Engine
    .getInstance()
    .useScene(new MyScene())
    .start();
