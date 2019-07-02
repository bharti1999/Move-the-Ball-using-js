var ball = document.getElementById('ball');

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballWidth = ball.offsetWidth;
var ballHeight = ball.offsetHeight;

function keyCode(keypress){

	var top = parseInt(ball.style.top);
	var left = parseInt(ball.style.left);
	// W is pressed
	if(keypress === 119 || keypress === 87){
		if(top > 5){
			ball.style.top = top - 5 + "px" ;
		}
	}
	//A is pressed
	if(keypress ===97 || keypress === 65){
		if(left > 5){
			ball.style.left = left - 5 +"px";
		}
	}
	//S is pressed
	else if(keypress === 115 || keypress === 83){
		if(top < window.innerHeight - ballHeight -5){
			ball.style.top = top + 5 +"px";
		}
	}
	//D is pressed
	else if(keypress === 100 || keypress === 68){
		if(left < window.innerWidth - ballWidth - 5){
			ball.style.left = left + 5 +"px";
		}
	}
}

window.addEventListener('keypress',function(event){
	keyCode(event.keyCode);
})
