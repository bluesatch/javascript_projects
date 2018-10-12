function investmentcalc() {
    event.preventDefault();
    var investment = Number(document.getElementById('investment').value);
    var intRate = Number(document.getElementById('intRate').value);
    var periods = Number(document.getElementById('periods').value);
    var additionalAmount = Number(document.getElementById('additionalAmount').value);
    
    var term = document.getElementById('term').value;

    if (term == "year") {
        var intEarned = (investment * intRate) * periods;
    }; 

    if (term == "month") {
        var intEarned = (investment * intRate) * (periods / 12);
    };
    var output = document.getElementById('totalAmount');
    var outputIntEarned = document.getElementById('intEarned');
    var totalAmount = intEarned + investment + additionalAmount;
    outputIntEarned.innerHTML = "$" + intEarned.toFixed(2);
    output.innerHTML = "$" + totalAmount.toFixed(2);
}

