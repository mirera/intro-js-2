let operator = prompt("Please enter an operation");
let firstNumber = parseInt(prompt("Please enter your first Number")); 
let secondNumber = parseInt(prompt("Please enter your first Number")); 

if (operator == '+') {
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber;
}
else if (operator == '/') {
    result = firstNumber / secondNumber;
} else{
    console.log('Operation not recognhized')
}
console.log(result);
alert('The result of'+ ' '+ firstNumber + operator + secondNumber + ' ' +'is' + ' '+ result);
    
