// let x = { value: 10 };
// let y = x;

// x.value = 20;


// cloning an object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// const another = {};
// for(let key in circle) 
//    another[key] = circle[key];

// const another = Object.assign({}, circle);

const another = { ...circle };

console.log(another);