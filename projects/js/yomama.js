function yomama() {
    event.preventDefault();

    var dumb = ["her boss gave her overtime and she stood on a clock", "she played a shoehorn in the band", "she misspelled the ABC song", "she didn't email me cause she ran out of stamps", "she doesn't get on the web cause she's afraid of spiders" ];
    var fat = ["Thanos had to snap his fingers twice", "she walked past my tv and I missed three seasons", "Pizza Hut had to upgrade to Pizza Apartment", "she needs 10 phones to take a selfie", "her belt size is etc."];
    var ugly = ["Instagram suspended her account for taking a selfie", "she's ugly on radio", "Facetime gave her an 'R' Rating", "the plastic surgeon needed a stronger substance", "the psychiatrist told her to face her fears so she looked in the mirror." ];
    var old = ["Moses stood her up.", "she's older than color.", "she threw the first pitch. Ever. ", "she knew the Mississippi River when it was a creek.", "her teeth are wrinkled." ];
    var adjective = document.getElementById('adjective').value;
    var output = document.getElementById('output') ;
    if (adjective == "dumb") {
        var joke = dumb[Math.round(Math.random() * 4)];
    } else if (adjective == "fat") {
        var joke = fat[Math.round(Math.random() * 4)];
    } else if (adjective == "ugly") {
        var joke = ugly[Math.round(Math.random() * 4)];
    } else if (adjective == "old") {
        var joke = old[Math.round(Math.random() * 4)];
    };
    output.innerHTML = "Yo Mama so " + adjective + " " + joke;

};