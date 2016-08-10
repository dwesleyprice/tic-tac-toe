//N Size Version

var whoseTurn = 1; //start off on player 1's turn;

// 1. Winners array


var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var winners = []; // empty array 
var gridSize = 3;


$('.box').click(function(){
	markSquare();
})
// a0, a1, a2...aN
// b0, b1, b2...bN

var diag1 = [];
var diag2 = [];

for (var i = 0; i < gridSize; i++) {
	diag1.push((alph[i]) + (gridSize - i));
	diag2.push(alph[i] + i);
	var winnersInsideH = [];
	var winnersInsideV = [];
	for (var j = 0; j < gridSize; j++) {
		//Horizontal winners
		winnersInsideH.push(alph[j] + i);
		//Vertical Winners
		winnersInsideV.push(alph[i] + j);
	}
	winners.push(winnersInsideH);
	winners.push(winnersInsideV);
}
winners.push(diag1);
winners.push(diag2);


// 2. populate board
var htmlForTheBoard = 0;
var boxWidth = (100/gridSize) - (gridSize - 1);
for (var i = 0; i < gridSize; i++) {
	htmlForTheBoard += '<div class="board-row' + i + ' board-row">';
		for(var j = 0; j < gridSize; j++){
			htmlForTheBoard += '<button id="' + alph[i] + j + '" class="box" style="width:'+boxWidth+'%" onclick="markSquare(this)">';
		}
	htmlForTheBoard += '</div>';
	//console.log(htmlForTheBoard)
}
document.getElementsByClassName('game-wrapper')[0].innerHTML = htmlForTheBoard;

var player1 = []; //Array where we will stas squares p1 has checked
var player2 = []; //array for p2
var someoneWon = false;

function markSquare(square){

	// Check to see if the square is in a player's array. If so, goodbye!
	if(someoneWon){
		console.log("Be ye disabling of yon shield");
	}

	else if((player1.indexOf(square.id) == -1) && (player2.indexOf(square.id) == -1)) {

	if(whoseTurn == 1){
		square.className += ' test-tile-x';
		whoseTurn = 2;
		player1.push(square.id);
		checkWin(player1, 1);

	} else {square.className += ' test-tile-o';
		whoseTurn = 1;
		player2.push(square.id);
		checkWin(player2, 2);
	}

	}else {console.log("Nope!")
 }
}

function checkWin(currentPlayersSquares, whoJustMarked){
	var rowCount = 0;
	for(var i = 0; i < winners.length; i++){
		//loop through each row of inner array
		rowCount = 0;
		for(var j = 0; j < winners[i].length; j++){
			if(currentPlayersSquares.indexOf(winners[i][j]) > -1){
				//HIT!
				rowCount++;
				//console.log(rowCount);
			}
			if(rowCount == gridSize){
				gameOver(whoJustMarked, winners[i]);

				}
			}
		}
	}

	function gameOver(whoWon, winningCombo){
		var message = document.getElementById('message');
		message.innerHTML = "Congrats! Player " + whoWon + " You won with " + winningCombo.join();
		for (var i = 0; i < winningCombo.length; i++) {
			document.getElementById(winningCombo[i]).className += ' winner';
			someoneWon = true;
		}

		//console.log(player1);
	}

function doOver(){
	location.reload();
}

	// function computerMove(square){
	// 	for (var i = 0; i < player1.length; i++) {
	// 		if(player1[i] == a1){
	// 			player2.push("a2");
	// 			square.innerHTML = 'O';
	// 			whoseTurn = 1;
	// 			checkWin(player2, 2);
	// 			console.log(player2);
	// 		}
	// 	}
	// }





//PsuedoCode for checkBoard() function

// BIG IDEA: LOOK FOR A COMBO OF VALUES: 
// x.length@ current array (I.E. ROW); 
// y.length@ current array (I.E. ROW);
// || x1+y1+x2+y2

// an array of arrays:

// [
// [i.0]
// [i.1]
// [i.2]
// ]