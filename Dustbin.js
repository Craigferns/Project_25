class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.dustbinWidth=200;
      this.dustbinHeight=100;
      this.wallThickness=20;
      this.angle = 0;
      
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options);
      this.rightBody = Bodies.rectangle(this.x + this.dustbinWidth/2,this.y - this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
      this.leftBody = Bodies.rectangle(this.x - this.dustbinWidth/2,this.y - this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);

      World.add(world, this.bottomBody);
      World.add(world, this.rightBody);
      World.add(world, this.leftBody);
    }
    display(){
      var posBottom =this.bottomBody.position;
      var posRight =this.rightBody.position;
      var posLeft =this.leftBody.position;
      
            push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("green")
			stroke(0)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
            push()
            translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("green")
			stroke(0)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()

            push()
            translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("green")
			stroke(0)
			rotate(this.angle)
			rect(0,0,this.dustbinWidth, this.wallThickness);
            pop()
    }
  };