
// Common JS module in Node
// moved code to circle.js file
// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     draw() {
//         console.log('Circle with radius' + _radius.get(this));
//     }
// }

import {circle} from './circle.js';

const c = new Circle(10);
c.draw();