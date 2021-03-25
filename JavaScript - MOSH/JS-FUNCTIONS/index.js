// Function Declaration 
function run() {
    console.log('running');
}

run();

// Function Expression
let runs = function() {
    console.log('walking');
};

runs();

function addition() {
    let total = 0;
    for(let value of arguments)
       total += value;
    return total;
}

// Rest operator
function sum(...args) { 
    return args.reduce((a, b) => a + b);
}

// spread operator should be the last parameter
// cannot declare anyother parameter after the spread operator
function add(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));

// Default parameters

// If we set a parameter a default value, all the parameters after that should be set a default value.
// Like if I set a default value for rate, should set for years as well
function interest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5;
    // years = years || 5;
    return principal * rate/ 100 * years;
}

 console.log(interest(10000));
//console.log(interest(10000, undefined, 5));

// Getters and Setters
const person1 = {
    firstName: 'Kundan',
    lastName: 'Keshidi',
    get fullName() {
        return `${person1.firstName} ${person1.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person1.fullName = 'Kundan Keshidi';

// getters => access properties
// setters => change (mutate) them

console.log(person1);

// Try and catch

const person = {
    firstName: 'Kundan',
    lastName: 'Keshidi',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if(typeof value !== 'string')
           throw new Error('value is not a string');

        const parts = value.split(' ');
        if(parts.length !== 2)
           throw new Error('Enter a first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


try {
    person.fullName = 'Mosh Hamedani';
}

catch (e) {
    alert(e); // not a good way of coding
}

console.log(person);

// this function 
// object executing the current function

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

// video.stop = function() {
//     console.log(this);
// };

function playVideo() {
    console.log(this);
}

video.play();

// Excercise 1 - Sum of Arguments

function sum2(...args) {
    if(args.length === 1 && Array.isArray(args[0]))
       args = [...args[0]];

    return args.reduce((a, b) => a + b);
}

console.log(sum2([1, 2, 3, 4]));

// Excercise 2 - Area of a circle

// circle.radius = 2;

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

// Error Handling

try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurences(null, 1);
    console.log(count);
}

catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement){
    if(!Array.isArray(array)) 
       throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurence3 = (current === searchElement) ? 1 : 0;
        return accumulator + occurence3;
    }, 0);
}

