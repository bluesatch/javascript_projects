function reverseIt() {
    var theText = document.getElementById('text').value; //I keep forgetting .value!
    var splitTheText = theText.split(''); // splits the string
    var reversed = splitTheText.reverse(); // reverses the string
    var result = reversed.join(''); // joins the reversed characters
    var output = document.getElementById('reversed');
    output.innerHTML = result;

};