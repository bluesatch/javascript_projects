function netpay() {
    var grossPay = document.getElementById('gross').value; // .value to accept value
    var deduct = document.getElementById('deduct').value;
    var fed = .15;
    var state = .05;
    var fica = .0762;
    var netPay = grossPay - ((grossPay * fed) + (grossPay * state) + (grossPay * fica));
    var netPay = netPay - deduct;
    output.innerHTML = netPay.toFixed(2); // .toFixed() to reduce to decimal places
}