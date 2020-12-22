class Paper {

    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);        
        // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        strokeWeight(3);
        stroke("yellow");
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        
        pop();
      }
}
