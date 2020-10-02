class Rectangle{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
      
        this.body =Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        this.x=x;
        this.y=y;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height)
    }
};