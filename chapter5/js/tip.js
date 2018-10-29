function tipCalc() {
    event.preventDefault();
    var bill = parseFloat(document.getElementById('bill').value); // takes the input as a float
    var tip = document.getElementById('tip').value;
    var otherAmount = document.getElementById('otherAmount').value;
    var addOn = 0;
    if (tip === "0") { // if tip field is at 0
        addOn = bill * (otherAmount / 100);
    } else {
        addOn = bill * tip;
    }
    addOn = Number(addOn);
    var result = bill + addOn;
    var total = document.getElementById('total');
    total.innerHTML = "$" + result.toFixed(2); // two decimal places


};