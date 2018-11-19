var amount;
var depositAmount;
var balance;
var response; 
function validate() {
    var pin = document.getElementById('input').value;
    var options = ['Withdraw', 'Deposit', 'Check Balance', 'View Statement'];
    var output = document.getElementById('text');
    output.innerHTML = "<form action='#' class='inputs'><p>" + "Please Select an Option" + "</p>" + "<input type='radio' name='option' clicked='clicked' value='1'/>" + options[0] + "<br>" + "<input type='radio' name='option' value='2'/>" + options[1] + "<br>" + "<input type='radio' name='option' value='3'/>" + options[2] + "<br>" + "<input type='radio' name='option' value='4'/>" + options[3] + "<br>" + "<input type='submit' onclick='options()' value='Next'></form>";
};

function options() {
    var response = Number(document.querySelector('input[name=option]:checked').value);
    if (response === 1) {
        withdraw();
    } else if (response === 2) {
        deposit();
    } else if (response === 3) {
        checkBalance();
    } else if (response === 4) {
        bankStatement();
    };
}
function withdraw() {
    var message = "How much would you like to withdraw?";
    output = document.getElementById('output');
    
    balance = Math.floor(Math.random(25) * Math.floor(10000));
    amount = Number(document.getElementById('pin').value);
    if (amount > balance) {
        var finish = "Insufficient funds on this card"
    } else if (amount < balance) {
        message = "Dispensing funds";
        balance = balance - amount;
        finish = "Please collect your cash. Your remaining balance is " + balance + "Thank you for using Bank of Satch";
    }
    output = document.getElementById('output');
    output.textContent = finish;

}
