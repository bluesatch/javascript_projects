function survey() {
    event.preventDefault();
    var q1 = Number(document.querySelector('input[name=job]:checked').value);
    var q2 = Number(document.querySelector('input[name=spare]:checked').value);
    var q3 = Number(document.querySelector('input[name=music]:checked').value);
    var q4 = Number(document.querySelector('input[name=getback]:checked').value);
    var q5 = Number(document.querySelector('input[name=family]:checked').value);
    var images = ["media/mack.jpg", "media/dolemite.jpg", "media/coffy.jpg", "media/superfly.jpg", "media/shaft.jpg"];
    var message = '';
    var resultpic;

    total = q1 + q2 + q3 + q4 + q5;
    console.log(total);

    if (total <= 9) {
        message = "Shaft. You are a Bad Mutha...SHUT YO MOUTH!";
        resultpic = images[4];
    } else if  ((total > 9) && (total <= 12)) {
        message = "Superfly! You're gonna get your fortune by and by!";
        resultpic = images[3];
    } else if ((total > 12) && (total <= 16)) {
        message = "Coffy. You're a Shining Symbol!";
        resultpic = images[2];
    } else if ((total > 16) && (total <= 20)) {
        message = "Dolemite, you rat-soup eating...";
        resultpic = images[1];
    } else if (total > 20) {
        message = "The Mack. And I choose you.";
        resultpic = images[0];

    };

    var output = document.getElementById('result');
    var imageresult = document.getElementById('resultpic');
    output.innerHTML = message;
    imageresult.innerHTML = '<img src="' + resultpic + '" />';

};