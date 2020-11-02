class Bob{

    constructor(x,y,width,height,angle){
     
        var options={
        frictionAir:0.05,
        density:1.2
        }
   
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    }
    display()
    {
    
    var bobpos=this.body.position;
    var angle=this.body.angle;
    
    push()
    translate(bobpos.x,bobpos.y);
    rotate(angle);
    //rectMode(CENTER)
    //strokeWeight(3);
    //fill(255,0,255)
    ellipse(0,0,this.width,this.height);
    pop()
    }
}