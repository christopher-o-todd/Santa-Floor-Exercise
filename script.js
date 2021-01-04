const fs = require('fs');

// Question 1: What floor does Santa end up on?
// '(' --> Santa goes UP 1 floor
// ')' --> Santa goes DOWN 1 floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        console.log(directions)
    })

}
question1();


// Question 2: When does Santa first enter the basement?