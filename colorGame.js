var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");

for(var i =0; i<modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function() {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new colors";
    // If i choose play again --> remove [correct ;)] message 
    messageDisplay.textContent = "";
    // change color of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    header.style.background = "steelblue";
}

// easyBtn.addEventListener('click', function() {
//     // alert('easy clicked')
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i< squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
    
// });

// hardBtn.addEventListener('click', function() {
//     // alert('hard clicked')
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i< squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";  
//     }
// });

resetButton.addEventListener('click', function() {
    reset();
})

colorDisplay.textContent = pickedColor;

// Represents a value in the rgb array for each squares
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
           header.style.background = clickedColor;
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