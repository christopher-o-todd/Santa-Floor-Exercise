const fs = require('fs');

// Question 1: What floor does Santa end up on?
// '(' --> Santa goes UP 1 floor
// ')' --> Santa goes DOWN 1 floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time'); //how long it takes function to run
        const directions = data.toString(); //convert text to string
        const directionsArray = directions.split(''); //split each character into array
        const answer = directionsArray.reduce((acc, currentValue) => { //where acc = accumulator
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('Final Floor:', answer)
    })
}
question1();

// Question 2: When does Santa first enter the basement?

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => { //ends the function when accumulator < 0
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter ++;
            return accumulator < 0;
        })
        console.log('Basement entered on floor:', counter);
    })
}
question2();







