class Box{
    constructor(x,y,width,height){
        var option={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
       push();
       strokeWeight(3);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}