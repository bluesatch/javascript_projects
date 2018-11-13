var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var letterCount = {};
var letterCountText = '';

var output = document.getElementById('output');

function wordcount() {
    event.preventDefault();
    var vowelCount = 0;
    var consCount = 0;
    var str = document.getElementById("str").value.toLowerCase();
    
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
    
        vowels.forEach(function(el) {
            if(char === el){
                vowelCount++;
        // for (var key in letterCount) {
        //     if (letterCount.hasOwnProperty(el)) {
        //         letterCount[el] += 1;
        //     } else {
        //         letterCount[el] = 1;
        //     }
        // }
            }
        });
        consonants.forEach(function(el) {
            if(char === el){
                consCount++;
                // if (letterCount.hasOwnProperty(el)) {
                //   letterCount[el] +=1;  
                // } else {
                //     letterCount[el] = 1;
                // }
            }
        });
    }
    output.innerHTML = "You have " + vowelCount + " vowels and " + consCount + " consonants";
};
