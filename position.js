l1_balls = document.querySelectorAll(".layer1 .ball");
l2_balls = document.querySelectorAll(".layer2 .ball");
l3_balls = document.querySelectorAll(".layer3 .ball");
size = 0;

for (let index = 0; index < l1_balls.length; index++) {
    negative = Math.round(Math.random()) * 2 - 1
    top_num = Math.floor(Math.random() * 10 + 11);
    left_num = Math.floor(Math.random() * 5 + size * negative) + -5;
    ball = l1_balls[index];
    ball.style.top = top_num + "px";
    ball.style.left = left_num + "px";
    size += 10;
}

size = 0;
for (let index = 0; index < l2_balls.length; index++) {
    negative = Math.round(Math.random()) * 2 - 1
    top_num = Math.floor(Math.random() * 10 + 11) + 5;
    left_num = Math.floor(Math.random() * 70 + size * negative) + -30;
    ball = l2_balls[index];
    ball.style.top = top_num + "px";
    ball.style.left = left_num + "px";
    size += 5;
    console.log(ball);
}

size = 0;
for (let index = 0; index < l3_balls.length; index++) {
    negative = Math.round(Math.random()) * 2 - 1
    top_num = Math.floor(Math.random() * 10 + 11) + 20;
    left_num = Math.floor(Math.random() * 100 + size * negative) + -50;
    ball = l3_balls[index];
    ball.style.top = top_num + "px";
    ball.style.left = left_num + "px";
    size += 5;
    console.log(ball);
}