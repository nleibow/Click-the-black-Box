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
	ranBox.setAttribute("style","background: radial-gradient(circle at 100px 100px, #000, #000");
	ranBox.addEventListener("click",function(){
		timer;
		score ++;
		
		
		if (turns==0) {
			scoreArr.push(score);
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			var score1 =document.getElementById("score0").innerHTML= score;
			
			
		}
		else if (turns == 1) { 
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			var score2 = document.getElementById("score1").innerHTML= score;
	
		}
		else if (turns == 2) {
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			var score3 = document.getElementById("score2").innerHTML=score;

		}
		else if (turns == 3) {
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			var score4 = document.getElementById("score3").innerHTML=" "+ score;
		}
		else if (turns == 4) {
			var element = document.getElementById("row1");
			element.parentNode.removeChild(row1);
			var score5 =document.getElementById("score4").innerHTML=score;
			
		}	
		else if (turns == 5){
			alert("that is the end of the game! Refresh your browser to play again and beat your high score!!")

		}	
		gameBoard();
		timer();
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
var count = 10;
var turns = 0;
var initialInterval = setInterval(timer,1000);

function timer(countInterval){
	count -=1;
	if (count < 0){
		count = 10;
		clearInterval(countInterval);
		
	} else if(count === 0){
		turns ++;
		score = 0;
		alert("Player your turn is up, Next player get ready!")
	
	}
	document.getElementById("timer").innerHTML = 'Timer:  '+count +" seconds remain!";
}

function resetArray (){
	scoreArr.length= 0;
	

}