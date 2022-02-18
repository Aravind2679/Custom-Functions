Array.prototype.myReduce = function(callback, initialValue) {
    var answer = initialValue;

    for (let i = 0; i < this.length; i++) {
        answer = callback(answer, this[i]);

    }
    return answer;
}

const numbers = [2, 4, 6, 8, 10, 12];
var sum = numbers.myReduce(customReduce, 10);
console.log("The total sum is " + sum);

function customReduce(accumulator, currentValue) {
    console.log(accumulator + " " + currentValue);
    return accumulator + currentValue;
}