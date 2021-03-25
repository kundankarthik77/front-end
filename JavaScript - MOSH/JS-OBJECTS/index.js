
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }, 
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};


circle.draw();   // method

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
        //radius: radius,
        // location: location,
        // isVisible: true,
        // draw: function() {
        //     console.log('draw');
        // }
    };
}


const circle1 = createCircle(1);
console.log(circle1); 

const circle2 = createCircle(2);
console.log(circle2);


// Constructor Function
// naming convention is different, not camel case notation
// Pacal notation - First letter of every word is uppercase.

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
 }


 const another = new Circle(1);
 
 