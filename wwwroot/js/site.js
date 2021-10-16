const canvas = document.getElementById('ballCanvas');
const context = canvas.getContext('2d');

var ball = {

    radius: 100,
    ballX: canvas.height / 2,
    ballY: canvas.width / 2

};

function drawBall() {

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(ballX, ballY, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

}

drawBall();