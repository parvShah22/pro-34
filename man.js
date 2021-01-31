class Man {
    constructor(x,y) {
      var options = {
         restitution:0.8,
         frictionAir:0.5,
         density:2
      }
      this.body = Bodies.circle(x,y,70,options);
      this.radius = 70;
      this.image=loadImage("sprites/super.png")

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle)
     imageMode(CENTER);
      fill("cyan");
     
      image(this.image,0,0,200,100)
      pop();
    }
  };
