function arguments(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

var result = arguments(3, 5, 19, 20, 5);
console.log(result);