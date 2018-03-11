var snake;
var standForScale = 25;
var food;

function setup(){
  createCanvas(600,600);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function draw(){
  background(51);
  //check if the snake is at the same location as the food
  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();

  //drawing the food block
  fill(255, 150, 0);
  rect(food.x , food.y, standForScale, standForScale);
}

function mousePressed(){
//"cheating" method
snake.total++;  
}

function pickLocation(){
  //set a random location for the food on a grid
  var columns = floor(width/standForScale);
  var rows = float(width/standForScale);
  food = createVector(floor(random(columns)), floor(random(rows)));
  food.mult(standForScale);
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}
