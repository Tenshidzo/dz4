var numbersArray = [10, 15, 96, 8, 22, 7, 48, 33, 5, 17];
var targetNumbers = [22, 48, 96];

targetNumbers.forEach(function(targetNumber) {
    var index = numbersArray.indexOf(targetNumber);
    if (index !== -1) {
        console.log("arr[" + index + "] = " + targetNumber);
    } else {
        console.log("-1");
    }
});
var numbers = [-8, 19, -2, 41, 90, -123, -2, 34, 56];

var sumOfPositiveNumbers = numbers.reduce(function(acc, current) {
    if (current > 0) {
        return acc + current;
    }
    return acc;
}, 0);

console.log("Сума позитивних елементів: " + sumOfPositiveNumbers);