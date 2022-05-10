let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


function drawCircle(x: number, y: number){
    ctx.beginPath();
    ctx.arc(x,y,25,0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

// let ballX = 100;
// let ballY = 100;
// let ballSpeedX = 1;
// let ballSpeedY = 2;

let ball_list : [number, number, number, number][] = [
                                                        [100,100,1,2],
                                                        [200,300,-2,-1],
                                                        [150,500,3,-2]
                                                    ]

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (const ball of ball_list){
        drawBall(ball);
        updateBall(ball);
    }
}

function drawBall(ball : [number, number, number, number] ){
    drawCircle(ball[0], ball[1]);
}

function updateBall(ball : [number, number, number, number] ){
    ball[0] += ball[2];
    ball[1] += ball[3];
    //if you've touched a left or right "wall", flip the x component of ball speed
    if ( ball[0] <= 25 || ball[0] >= canvas.width - 25) {
        ball[2] = -ball[2];
    }

     //if you've touched a top or bottom "wall", flip the y component of ball speed
     if ( ball[1] <= 25 || ball[1] >= canvas.height - 25) {
        ball[3] = -ball[3];
    }

}

setInterval(draw, 18);
