let number = max(1,2);
console.log(number);

function max(num1, num2){
    return (num1 > num2) ? num1 : num2;
}



console.log(isLandScape(600, 400));

function isLandScape(width, height){
    return (width > height);
}



const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') 
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0)) 
            return 'FizzBuzz';

    if(input % 3 === 0) 
        return 'Fizz';

    if (input % 5 === 0) 
        return 'Buzz';


    return input;
}

checkSpeed(120);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('License Suspended');
    else
        console.log('Points', points);

}

showNumbers(10);

function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}



const array = [null, undefined, '', 0, 2, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array)
       if(value)
       count++;
    return count;
}


const movie = {
    title: 'a',
    releaseYear: 2020,
    rating: 4.2,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number')
           console.log(key, obj[key]);
    }
}


console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for(let i = 0; i <= limit; i++){
        if((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    }
    return sum;
}



const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){

    const average = calculateAverage(marks);
    
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for(let mark of array)
        sum += mark;
    
    return sum / array.length;

}


showStars(5);

function showStars(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = '';
        for(let i = 0; i < row; i++)
           pattern += "*";
        console.log(pattern);
    }
}



showPrimes(20);

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++)
        // 2 - current (i)
        
        if(isPrime(number)) console.log(number);
}

function isPrime(number){
    let isPrime = true;
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0) 
          return false;
    
    return true;
}