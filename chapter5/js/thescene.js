function start() {
    event.preventDefault();
    var header = "The Scene";
    var scene1 = "You are an up and coming musician. You just flew into the big city, ready with horn in hand, to make a nam for yourself. You hear about two nightclubs to visit, Minton's Playhouse and Satch's Kitchen. Which one do you choose?";
    var choice1 = "Minton's Playhouse";
    var choice2 = "Satch's Kitchen";
    var theScene = document.getElementById('theScene');
    var dec1 = document.getElementById('choice1');
    var dec2 = document.getElementById('choice2');
    var storyLine = document.getElementById('storyLine');
    theScene.textContent = header;
    storyLine.textContent = scene1;
    dec1.textContent = choice1;
    dec2.textContent = choice2;

}

var scenario = [
    "You meet Saxophonist Skunkbucket LeFunke. He asks to see what you've been working on. You agree and have a late-night jam session. He steals all of your songs and makes a fortune. You never receive a dime and now heroin is your only friend.", // scenario[0]

    "You bump into Charlie Parker, Dizzy Gillespie, and Thelonious Monk. They ask you, to sit in with them. Do you?", // scenario[1]

    "You guys it it off. Thelonious helps you with your compositions. Dizzy adds yo to his band and introduces you to other musicians. Charlie introduces you to funny cigarettes. Smoke one?", // scenario[2]

    "Wow!! Talk about creativity! You're now seeing things differently. Your ears are much more sensitive to the sounds. Everything is slower and your compositions are a lot freer now. Charlie wants to take you from Dizzy, who is now giving you an opportunity to write songs for the band to play. What say you?", // scenario[3]

    "You've been spending more time getting high than being a musician. You're career is suffering. You take time away from the music and refocus.", // scenario[4]

    "Dizzy appreciates you staying. You're now leading his band. Things are great. You finally get an opportunity to lead your own small band. Do you take the opportunity or stay with Diz.", // scenario[5]

    "You're an instant success! You've been voted as Newcomer of the Year in all of the magazines, they're playing your songs in car commercials, and you got frequent gigs at all the hippest clubs. Living the Good Life!", // scenario[6]

    "You have a decent career staying with Diz. Unfortunately, there's so much unrealized potential. But a check is a check right?", // scenario[7]

    "Huh? Why would you pass up on playing with the giants? Maybe some other guys might be your speed." // scenario[8]
];

var headers = ["Satch's Kitchen", "Minton's Playhouse", "With the Boppers", "Bird's Demise", "Dizzy's Band", "Head of The Scene"];

var yes = "yes";
var no = "no";
var leave = "leave";
var stay ="stay";
var end = "Thanks for playing!";

function scene() {
    var choice = Number(document.querySelector('input[name=choice]:checked').value);
    var titleOutput = document.getElementById('theScene');
    var story = document.getElementById('storyLine');
    var decision1;
    var decision2;
    

}