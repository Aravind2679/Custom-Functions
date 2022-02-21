Array.prototype.myMap = function(callback) {
    var answerArray = [];
    for (let i = 0; i < this.length; i++) {
        answerArray[i] = callback(this[i], i, this);
    }
    return answerArray;
}

const numbers = [2, 4, 6, 8, 10];
console.log("Before calling myMap: " + numbers);
const answerArray = numbers.myMap(addNumber);
console.log("After calling myMap: " + answerArray);

function addNumber(currentValue, index, array) {


    return currentValue + 2;
}