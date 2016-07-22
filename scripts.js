var whoseTurn = 1; //start off on player 1's turn;

var winners = [
	["a1", "a2", "a3"],
	["b1", "b2", "b3"],
	["c1", "c2", "c3"],
	["a1", "b2", "c3"],
	["a1", "b1", "c1"],
	["a2", "b2", "c2"],
	["a3", "b3", "c3"],
	["a3", "b2", "c1"]
];

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
		square.innerHTML = 'X';
		whoseTurn = 2;
		player1.push(square.id);
		checkWin(player1, 1);

	} else {square.innerHTML = 'O';
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
				console.log(rowCount);
			}
			if(rowCount == 3){
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

		console.log(player1);
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
