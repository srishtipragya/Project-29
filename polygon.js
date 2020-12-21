class Polygon{
    constructor(){
       /* var option={
            restitution:1,
            friction:1,
            density:1.5
        }*/
        this.body=Bodies.circle(200,350,20);
        this.image=loadImage("pentagonImage.PNG");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
       // fill("yellow");
        //ellipse(this.body.position.x,this.body.position.y,20,20);
        pop();
    }
}