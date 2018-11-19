var turn = true; // player1 === true; player2 === false
var player1 = {
    x:1,
    y:1
};
var player2 = {
    x: randomNumber(),
    y: randomNumber()
};

var gameOver = false;
function play() {
    //did I hit player2
    var objXY = { 
        x: Number(event.target.dataset.x),
        y: Number(event.target.dataset.y)
    }
    var hitTarget = false;
    var player = '';

    if (gameOver) {
        return; 
    }
    if(turn) {
        turn=false;
        // what happens for me
        hitTarget = checkForHit(objXY, player2); 
        player = 'Player 1';
    } else { 
        turn = true; 
        shot = {
            x: randomNumber(),
            y: randomNumber()
        }
        hitTarget = checkForHit(shot, player1); 
        player = 'Player 2';
    } //did the computer hit me
    if (hitTarget) { //true or false
        console.log('You Win ' + player + '!');
        gameOver = true;
    } else {
        console.log('You Missed ' + player + '!');
        if (!turn) {
            play();
        }
    }
}

function randomNumber() {
    return Math.ceil(Math.random() * 3);
}

function setPlayer1() {
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function(tile) {
        tile.addEventListener('click', set function Player1Location() {
            tile.className += ' battleship';
            player1 = {
                x: Number(event.target.dataset.x),
                y: Number(event.target.dataset.y)
            }
        });
    });
};

function confirmPlayer1() {
    
}
    var confirm = document.getElementById('confirm');
    var output = document.getElementById('output');
    });
}

function setPlayer1Location() {
   var battleship = document.querySelector('.battleship');
   battleship.className = 'tile';
   event.target.className += ' battleship';
   player1 = {
       x: Number.target.dataset.x)
   }
}
 //check to see if player 2 is hit
function checkForHit(shot, player) {
    for (var coord in shot) {
        var coord1 = shot[coord];
        var coord2 = player[coord];
        if (coord1 !== coord2) {
            return false;
        }
    }

    return true;
}