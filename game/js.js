//const p1 = document.querySelector('#p1')
//const play = document.querySelector('#play')
//
//function Clickplay(){
//    p1.classList.add('remove')
//}
//
//play.addEventListener('click', Clickplay)



var Canvas = document.getElementById('game')
var Context = Canvas.getContext('2d')

var paddle = {
    x: 0,
    y: Canvas.height - 10,
    width: 150,
    height: 10,
}

var Ball = {
    x: 20,
    y: 20,
    dx: 5,
    dy: 10,
    bk: 20
}

document.addEventListener('keypress', function(event){
    
})

function drawBall(){
    Context.beginPath();
    Context.arc(Ball.x, Ball.y, Ball.bk, 0, Math.PI * 2)
    Context.fill();
    Context.fillStyle = "aqua"
    Context.closePath();
}

function updatePoision(){
    Ball.x += Ball.dx
    Ball.y += Ball.dy
}

function vaCham(){
    if (Ball.x < Ball.bk || Ball.x > Canvas.width - Ball.bk){
        Ball.dx = -Ball.dx;
    }
    if (Ball.y < Ball.bk || Ball.y > Canvas.height - Ball.bk){
        Ball.dy = -Ball.dy;
    }
}

function draw(){
    Context.clearRect(0, 0, Canvas.width, Canvas.height)
    drawBall();
    
    vaCham();
    requestAnimationFrame(draw);
}

draw();