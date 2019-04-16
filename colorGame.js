var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
           // 맞으면 맞는 색깔로 사각형들 다 칠해지기
           changeColors(clickedColor);
        } else {
            // 틀린 사각형 지우기(배경색이랑 똑같이 만들어버려서 안보이게끔)
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