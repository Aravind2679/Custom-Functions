Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const numbers = [2, 4, 6, 8, 10, "Hai"];
console.log("Before myForEach: " + numbers);
numbers.myForEach(multiplyNumber);
console.log("after myForEach: " + numbers);

function multiplyNumber(currentValue, index, array) {
    //console.log(typeof(currentValue));
    //console.log(currentValue+" "+index+" "+array);
    if (typeof(currentValue) == "number")
        array[index] = currentValue * 10;
}