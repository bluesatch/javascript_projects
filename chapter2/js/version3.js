function ptocalc() {
    event.preventDefault();
    var years = document.getElementById("years").value;
    var rate;
    if (years < 5) {
        rate = 5;
    }
    
    if (years >= 5) {
        rate = 6;
    }
    
    if (years >= 10) {
        rate = 7;
    };
    var weeks = document.getElementById("weeks").value;
    var ptoToDate = (weeks * rate) / 2;
    var ptoDays = document.getElementById("ptoDays").value;
    var ptoToDate = ptoToDate - (ptoDays * 8);
    hoursOutput.innerHTML = ptoToDate;
    daysOutput.innerHTML = ptoToDate / 8;
    weeksOutput.innerHTML = ptoToDate / 40;
}