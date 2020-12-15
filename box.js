class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color= color(random(0,255),random(0,255),random(0,255));
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    fill(this.color);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
