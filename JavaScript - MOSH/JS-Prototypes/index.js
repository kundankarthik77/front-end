// Prototype vs Instance members

function Circle(radius) {
    // Instance members
    this.radius = radius;
    this.move = function() {
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function () {
    return 'Circle with radius' + this.radius;
}

console.log(Object.keys(c1)); // only returns instance members

for( let key in c1)
   console.log(key); // return all members - instance and prototype
    