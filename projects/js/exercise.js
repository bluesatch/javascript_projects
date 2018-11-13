var output = document.getElementById('output');
output.textContent = output.textContent + ' World'; // .textContent instead of innerHTML 

function addition(num1, num2) {
    return num1 + num2;   
}
var result = document.getElementById('math');
result.textContent = addition(6,4);

var names = ["Satch", "Herb", "Bryce"];
var array = document.getElementById('array');
array.textContent = names[2];