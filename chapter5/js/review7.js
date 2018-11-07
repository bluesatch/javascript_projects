var heading = document.getElementsByTagName('h2'); // gets element by tag name
var i;
for (i = 0; i < heading.length; i++) { 
    var element = heading[i];
    element.textContent = (i + 1) + ". " + element.textContent;
    heading.textContent;
}




