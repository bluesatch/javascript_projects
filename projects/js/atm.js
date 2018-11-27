var greeting = "Welcome to Bank of Satch Online Banking";
var card;
var pinAttempt = 1;
var pin;
var pinCheck;
var savingsBalance;
var checkingBalance;
var depositAmount;
var withdrawAmount;
var withdrawLimit = 500;

function opening() {
    var output = document.getElementById('message');
    output.textContent = greeting;
    var prompt = document.getElementById('prompt');
    prompt.textContent = "Please Enter Card";
    checkCard();
}

function checkCard() {
    card = 0;
    card = document.getElementById()
}