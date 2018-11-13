var stateCapitals = [
 'Montgomery',
 'Juneau',
 'Phoenix',
 'Little Rock',
 'Sacramento',
 'Denver',
 'Hartford',
 'Dover',
 'Tallahassee',
 'Atlanta',
 'Honolulu',
 'Boise',
 'Springfield',
 'Indianapolis',
 'Des Moines',
 'Topeka',
 'Frankfort',
 'Baton Rouge',
 'Augusta',
 'Annapolis',
 'Boston',
 'Lansing',
 'Saint Paul',
 'Jackson',
 'Jefferson City',
 'Helena',
 'Lincoln',
 'Carson City',
 'Concord',
 'Trenton',
 'Santa Fe',
 'Albany',
 'Raleigh',
 'Bismarck',
 'Columbus',
 'Oklahoma City',
 'Salem',
 'Harrisburg',
 'Providence',
 'Columbia',
 'Pierre',
 'Nashville',
 'Austin',
 'Salt Lake City',
 'Montpelier',
 'Richmond',
 'Olympia',
 'Charleston',
 'Madison',
 'Cheyenne'
];  
var output = document.getElementById('output');
var i = 1;
//for (i = 0; i < stateCapitals.length; i++) {
  //  var capital = stateCapitals[i];
    //output.innerHTML += '<li>' +(i + 1) + ". " + capital + '</li>'; //inner.HTML to add li element
//}

stateCapitals.forEach(function(capital){
    output.innerHTML += '<li>' + i + '. ' + capital + '</li>';
    i++;
});

// Either method works