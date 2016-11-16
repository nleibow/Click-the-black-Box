var score = 0;



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
	console.log(row1);
	document.getElementById("gameBoard").appendChild(row1);
	var ranBox = document.getElementById("box"+ Math.floor(Math.random() * (4 - 0) +0));
	ranBox.setAttribute("style","background-color: black;");
	ranBox.addEventListener("click",function(){
		if(score<0){
			timer();}
		score ++;
		console.log(score); 
		var element = document.getElementById("row1");
		element.parentNode.removeChild(row1);
		console.log(row1);
		document.getElementById("score0").innerHTML= "     "+score;
		
		gameBoard();
		return score;
		
		

	});


	
}
gameBoard();


function scoreBoard(){
	var scorey = document.createElement("ol");
	scorey.setAttribute("id","scorey");
	console.log(scorey);
		for (var i = 0; i < 5; i++) {
			var scoreyy = document.createElement("li");
			scoreyy.setAttribute("id","score"+ i);
			scorey.appendChild(scoreyy);
	};
	
	document.getElementById("scoreBoard").appendChild(scorey);
}

scoreBoard();


var count = 15;
var countInterval = setInterval(timer,1000);

function timer(){
	count -=1;
	if (count < 0){
		clearInterval(countInterval);
		return;
	} else if(count === 0){
		alert("out of time! next players turn!")
	}
	document.getElementById("timer").innerHTML = count +" seconds remain!";
}