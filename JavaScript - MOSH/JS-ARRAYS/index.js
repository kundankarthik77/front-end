const numbers = [1, 2, 3, 4];

// add at end of array
numbers.push(5, 6);


// add at begining
numbers.unshift(-1, 0); // pushes elements to right and add at the begining

// add at middle
numbers.splice(3, 0, 'a', 'b');

// remove from last
const last = numbers.pop();

// remove from first
const first = numbers.shift();

console.log(numbers);
console.log(last);
console.log(first);

console.log(numbers.indexOf('a'));

console.log(numbers.lastIndexOf('a'));

console.log(numbers.includes('a'));


const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);

const index = courses.findIndex(course => course.name === 'a');

console.log(index);


// combining and slicing arrays

const firstOne = [1, 2, 3];
const secondOne = [4, 5, 6];

const combined = firstOne.concat(secondOne);

const slice = combined.slice(2, 4); 

console.log(combined);
console.log(slice);

// Spread Operator
const firstOnes = [1, 2, 3];
const secondOnes = [4, 5, 6];

// const combined = firstOne.concat(secondOne);
const combineds = [...firstOnes, 'a', ...secondOnes, 'b'];
console.log(combineds);

// const copy = combined.slice();
const copy = [...combineds];
console.log(copy);

// Iterating an array
const number1 = [11, 22, 33, 44]

for(let key in number1)
   console.log(key, number1[key]);

number1.forEach((number, index) => console.log(index, number));

// Joining the arrays
const numbers2 = [1, 2, 3, 4];
const joined = numbers2.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined2 = parts.join('-');
console.log(combined2);

// Sorting Arrays
const numbers3 = [2, 4, 3, 1];
const sort = numbers3.sort();
console.log(numbers3);

numbers3.reverse();
console.log(numbers3);

const course2 = [
    { id: 1, name: 'Node'},
    { id: 2, name: 'javascript'}
];

course2.sort(function(a, b) {

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(course2);


// Testing the elements of an Array

const numbers4 = [1, 2, 3];

const allPositive = numbers4.every( value => value >= 0);
console.log(allPositive);

// Filtering an array

const numbers5 = [1, -1, 2, 4];

const filtered = numbers5.filter( value => value >= 0);

// const items = filtered.map( value => '<li>' + value + '</li>');
// const html = '<ul>' + items.join(' ') + '</ul>';

const html = filtered.map( n => ({ value: n}) );

console.log(html);


// Reducing an array
const nums = [1, -1, 2, 3];

// let sum = 0;
// for(let n of nums) 
//    sum += n;


// const sum = nums.reduce(
//     (accumulator, currentValue) => accumulator + currentValuel 
// );

// console.log(sum);


// Excercise 1 - Array from Range
const nums2 = arrayFromRange(10, 40);

console.log(nums2);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++){
        output.push(i);
    }
    return output;
}

// Excercise 2 - Includes
const nums3 = [1, 2, 3, 4]

console.log(nums3.includes(1));

function includes(array, searchElement) {
    for(let key of array)
       if (key == searchElement)
          return true;
    return false;
}

// Excercise 3 - Except

const nums4 = [1, 2, 3, 4, 1, 1]

const output = except(nums4, [1, 2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let key of array) 
       if(!excluded.includes(key))
          output.push(key);
    return output;
}

// Excercise 4 Moving an element
// const numbers6 = [1, 2, 3, 4];

// const output1 = move(numbers6, 0, 1);

// console.timeLog(output);

// function move(array, index, offset) {
//     const output1 = [...array];
//     const element1 = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element1);
//     return output1;
// }


// Excercise 5 count occurences
const nums5 = [1, 2, 3, 4, 2, 3];

const count2 = countOccurences(nums5, 3);

console.log(count2);

function countOccurences(array, searchElement){
    // let count = 0;
    // for( let ele of array) {
    //     if (ele  === searchElement)
    //       count++;
    // }
    // return count;
    return array.reduce((accumulator, current) => {
        const occurence3 = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence3;
    }, 0);
}


// Get Max
const num11 = [1, 2, 3, 4];

const max11  = getMax([1, 2, 2, 3]);

console.log(max11);

function getMax(array) {
    if(array.length === 0) return undefined;

    // let max = array[0];

    // for(let i = 1; i < array.length; i++)
    //    if (array[i] > max)
    //        max = array[i];
    // return max;

    return array.reduce( (a, b) => (a > b) ? a : b );
}

// Excercise 7 - Movies
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 3 },
    { title: 'c', year: 2018, rating: 4.7 },
    { title: 'd', year: 2017, rating: 3.5 },
];

// All the movies in 2018 with rating > 4
// sort them by their rating
// descending order
// pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map( m => m.title)

console.log(titles);