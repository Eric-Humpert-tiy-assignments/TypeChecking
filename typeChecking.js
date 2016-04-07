// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.


//the value of speed was being set to not a number because when the value of speed which was starting as zero was equal to added to null the result was not a real number.
var speed = 0

function accelerate(amount = 1) {
    return speed += amount;
}

console.log(accelerate());
