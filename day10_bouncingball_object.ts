

let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


interface Ball {
    x : number;
    y : number;
    speedX : number;
    speedY : number;
    radius : number;
    color? : string;
}

let ball_list : Ball[] = [
                            {x: 100, y: 100, speedX: 1, speedY: 2, radius: 25},
                            {x: 200, y: 300, speedX: -2, speedY:  -1, radius: 30, color: "red"},
                            {x : 150, y: 500, speedX: 3, speedY: -2, radius: 15, color: "blue"},
                         ]

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (const ball of ball_list){
        drawBall(ball);
        updateBall(ball);
    }
}

function drawBall(ball : Ball ){
    ctx.fillStyle = ball.color || "black";
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius,0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function updateBall(ball : Ball){
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    //if you've touched a left or right "wall", flip the x component of ball speed
    if ( ball.x <= ball.radius || ball.x >= canvas.width - ball.radius) {
        ball.speedX = -ball.speedX;
    }

     //if you've touched a top or bottom "wall", flip the y component of ball speed
     if ( ball.y <= ball.radius || ball.y >= canvas.height - ball.radius) {
        ball.speedY = -ball.speedY;
    }

}

setInterval(draw, 18);


//click event for the canvas- draw a circle at the click location
canvas.addEventListener("click", function(event : MouseEvent) {
    let newBall : Ball = {x : event.offsetX, y: event.offsetY, 
                        speedX : Math.random() * 10 - 5 , 
                        speedY : Math.random() * 10 - 5 , 
                        radius : Math.floor(Math.random() * 40 + 10),
                        };
    let red : number = Math.floor(Math.random() * 256);
    let green : number = Math.floor(Math.random() * 256);
    let blue : number = Math.floor(Math.random() * 256);
    newBall.color = `rgba(${red} ,${green} , ${blue} ,.5)`
    ball_list.push(newBall);
});