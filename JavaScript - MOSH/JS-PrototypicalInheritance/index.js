// Creating own prototypical inheritance
function extend(Child, Parent) {
    // Whenever we change the prototype we must reconstruct the constructor function
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}


function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

// Method overriding - reimplementing a method in a child object
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

Circle.prototype.draw = function() {
    console.log('draw');
}


// Polymorphism
function Square(size) {
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
];

for( let shape of shapes) {
    // if(Shape.type === 'Circle') 
    //   duplicateCircle();

    // else if(shape.type === 'Square')
    //   duplicateSquare();

    // else duplicateShape();
    Shape.duplicate; // instead of all the above lines we call this,
    // that is called as polymorphism in action
}
// Square.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = circle;

const s = new Shape();
const c = new Circle(1, 'red');


