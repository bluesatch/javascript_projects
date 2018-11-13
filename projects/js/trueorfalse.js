var tests = document.getElementsByTagName('li');
var output = document.getElementById('output');

for (var i = 0; i < tests.length; i++){
    var test = tests[i].textContent;
    var result;
    if (eval(test) == true) {
        var result = test + ": is true";
    } else {
        var result = test +  ": is false";
    }
    output.innerHTML += "<li>" + result + "</li>";
}
