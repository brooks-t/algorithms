console.log(`---------------------------------------`);
console.log(`---------------BASIC MATH--------------`);

function addNums(num1, num2) {
    return num1 + num2;
}
console.log(`Add numbers = ${addNums(5,5)}`);

function subNums(num1,num2) {
    return num1 - num2;
}
console.log(`Subtract numbers = ${subNums(100,50)}`);

function mulNums(num1,num2) {
    return num1 * num2;
}
console.log(`Multiply numbers = ${mulNums(23,24)}`);

function divNums(num1,num2) {
    return num1 / num2;
}
console.log(`Divide numbers = ${divNums(1500, 15)}`);

console.log(`---------------------------------------`);
console.log(`--------------EVEN OR ODD--------------`);

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOrOdd(100));

console.log(`---------------------------------------`);
console.log(`--------------LONG NUMBER--------------`);

function longNum (num) {
    for (i=0; i<=num; i++) {
        console.log(i);
    }
    return
}
longNum(24);