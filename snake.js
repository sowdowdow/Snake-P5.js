function Snake(){
  //define snake head position at start
  this.x = 0;
  this.y = 0;
  //define a starting speed
  this.xSpeed = 1;
  this.ySpeed = 0;
  //length of the snake
  this.total = 0;
  this.tail = [];

  this.death = function(){
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }

  //each update will make the snake head move to the new location
  this.update = function(){
    //if no food as been eaten
    if (this.total === this.tail.length) {
      //shift everything over by 1
      for (var i = 0; i < this.tail.length -1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xSpeed*standForScale;
    this.y = this.y + this.ySpeed*standForScale;

    this.x = constrain(this.x, 0, width - standForScale);
    this.y = constrain(this.y, 0, height - standForScale);

    $("#score").html("score : "+this.total);
  }

  //displaying the snake
  this.show = function(){
    fill(150,255,150);
    //display tail
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, standForScale, standForScale);
    }

    fill(255,50,50);
    //display head
    rect(this.x, this.y, standForScale, standForScale);
  }

  this.dir = function(x,y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  //recieve the postion of where the food is
  this.eat = function(pos){
    var distance = dist(this.x, this.y, pos.x, pos.y);
    if (distance < 1) {
      this.total++;
      return true;
    } else{
      return false
    }
  }
}
