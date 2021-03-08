function addition(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function increment(num) {
    return ++num
}

function decrement(num) {
    return --num
}

document.write("10 + 12 = " + addition(10, 12) + "</br>");
document.write("58 - 34 = " + subtraction(58, 34) + "</br>");
document.write("6 * 7 = " + multiplication(6, 7) + "</br>");
document.write("144 / 12 = " + division(144, 12) + "</br>");
document.write("12 + 1 = " + increment(12, 1) + "</br>");
document.write("34 - 1 = " + decrement(34, 1) + "</br>");