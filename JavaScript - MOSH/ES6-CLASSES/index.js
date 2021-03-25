
const _radius = Symbol();  // primitive type - every time we call it we get a new unique value
const _draw = Symbol();

class Circle {
    constructor(radius) {
     //   this.radius = radius;
     //   this['radius'] = radius;
     //   above line can be implemented similarly like this in symbols
     this[_radius] = radius; // private property
    }

   // draw() {}
}

// Private members using symbols
const c = new Circle(1);



// private members using WeakMaps

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        _move.set(this, () => {
            console.log('move', this);
        });
    }

    // Instance
    draw() {
        // console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw');
    }
}

const c = new Circle(1);

// Getters and setters in ES6

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.get(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if( value <= 0 ) throw new Error ('Invalid radius');
        _radius.set(this, value);
    }
}

const c = new Circle(1);

// Inheritance

class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}
 
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);

// Method Overriding

class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        // when we want above move method do the following line
        super.move();
        console.log('circle move');
    }
}

const c = new Circle();

