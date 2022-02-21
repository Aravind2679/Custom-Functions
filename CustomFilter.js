Array.prototype.myFilter = function(callback) {

    var voters = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i))
            voters.push(this[i]);

    }
    console.log(voters);
}

const numbers = [18, 23, 1, 56, 8, 56, 98, 13];
const ValidVoters = numbers.myFilter(VoterAge);
console.log("The valid voters are " + ValidVoters);

//Check Voter Age above 18
function VoterAge(currentValue, currentIndex) {
    console.log(currentValue + " " + currentIndex);
    return currentValue >= 18;
}

function addd() {

}