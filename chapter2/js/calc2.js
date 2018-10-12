function calcpto() {
    var output = document.getElementById('output');
    var input = document.getElementById('input').value;
    var hours;
    var payCheck = 26;
    if (input < 5) {
        hours = 5;
    }
    
    if (input >= 5) {
        hours = 6;
    }
    
    if (input >= 10) {
        hours = 7;
    }
    var PTO = hours * payCheck;
    output.innerHTML = PTO/40;
}