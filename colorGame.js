var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll('.square');
var message = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = 'none';
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';
	}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

var messageDisplay = document.querySelector("#message");

for (var i = 0; i < squares.length; i++) {
  // set colors for squares
  squares[i].style.backgroundColor = colors[i];

  // add listeners to squares
  squares[i].addEventListener("click", function(){
  	var clickedColor = this.style.backgroundColor;

	if(clickedColor===pickedColor){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play again?";
		changeColors(pickedColor);
		h1.style.backgroundColor = pickedColor;
	}
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again";
	}
  });
}

function changeColors(color){
	// loop through all squares 
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(size){
	var arr = [];

	for(var i = 0; i < size; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

