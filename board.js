var score = 0;
var scoreArr = [];






var rando = Math.floor(Math.random() * (4 - 0) +0);
var randoBox = "box"+ rando;



function gameBoard(){
	var row1 = document.createElement("div");
	row1.setAttribute("id","row1");
		for (var i = 0; i < 4; i++) {
			var boxs = document.createElement("div");
			boxs.setAttribute("id","box"+ i);
			row1.appendChild(boxs);
	};
	document.getElementById("gameBoard").appendChild(row1);
	var ranBox = document.getElementById("box"+ Math.floor(Math.random() * (4 - 0) +0));
	ranBox.setAttribute("style","background: black");
	ranBox.addEventListener("click",function(){
		score ++;
		
		
		if (turns==0) {
			scoreArr.push(score);
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			document.getElementById("score0").innerHTML= score;
			var score1 =document.getElementById("score0").innerHTML;
			
			
		}
		else if (turns == 1) { 
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			document.getElementById("score1").innerHTML= score;
			var score2 = document.getElementById("score1").innerHTML
	
		}
		else if (turns == 2) {
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			document.getElementById("score2").innerHTML=score;
			var score3 = document.getElementById("score2").innerHTML;

		}
		else if (turns == 3) {
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			document.getElementById("score3").innerHTML=score;
			var score4 =document.getElementById("score3").innerHTML;
		}
		else if (turns == 4) {
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			document.getElementById("score4").innerHTML=score;
			var score5= document.getElementById("score4").innerHTML;
			
		}	
		else if (turns == 5){
			winner(score1, score2, score3, score4, score5);
			alert("that is the end of the game! Refresh your browser to play again and beat your high score!!");
			

		}	
		gameBoard();
		return score;
	});


	
}
gameBoard();


function scoreBoard(){
	var scorey = document.createElement("ol");
	scorey.setAttribute("id","scorey");
		for (var i = 0; i < 5; i++) {
			var scoreyy = document.createElement("li");
			scoreyy.setAttribute("id","score"+ i);
			scoreyy.innerHTML=0;
			scorey.appendChild(scoreyy);
	};
	
	document.getElementById("scoreBoard").appendChild(scorey);
}

scoreBoard();
var count = 15;
var turns = 0;
var initialInterval = setInterval(timer,1000);

function timer(countInterval){
	count -=1;
	if (count < 0){
		count = 15;
		clearInterval(countInterval);
		
	} else if(count === 0){
		turns ++;
		score = 0;
		alert("Player your turn is up, Next player get ready!")
		timer();
	
	}
	else if (turns == 5){


	}
	document.getElementById("timer").innerHTML = 'Timer:  '+count +" seconds remain!";
}

function winner(score1, score2, score3, score4, score5){
	console.log("whatsa good")
	if (score1>score2 && score1>score3 &&score1>score4 &&score1>score5) {
				console.log("player 1 is the winner!");
			}
			else if (score2>score1 && score2>score3 && score2>score4 && score2>score5){
				console.log("player 2 is the winner!");
			}
			else if (score3>score1 && score3>score2 && score3>score4 && score3>score5){
				console.log("player 3 is the winner!");
			}
			else if (score4>score1 && score4>score3 && score4>score3 && score4>score5){
				console.log("player 4 is the winner!");
			}
			else if (score5>score1 && score5>score3 && score5>score4 && score5>score4){
				console.log("player 2 is the winner!");
			}


}

