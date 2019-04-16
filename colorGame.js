var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', function() {
    // alert('clicked');
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change color of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;

// 사각형별로 rgb 배열에 있는 값으로 나타내기 
for(var i = 0; i < squares.length; i++) {

    // add initial colors to squares
    squares[i].style.background = colors[i];

    // add click listeners to squars
    squares[i].addEventListener('click', function() {
        // alert("clicked!");

        // grab color of clicked square
        var clickedColor = this.style.background;

        // compare color to pickedColor
        if(clickedColor === pickedColor) {
           messageDisplay.textContent = "Correct ;)";
           resetButton.textContent = "Play Again?"
           // corrected -> all paint with correct color
           changeColors(clickedColor);
           h1.style.background = clickedColor;
        } else {
            // wrong -> clicked square clear
            // no delete! just make the background color the same as invisible
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);

    // Watch out! ---> "space"
    // "rgb(r, g, b)"
    // not "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}