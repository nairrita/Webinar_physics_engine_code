class Bob{
    constructor(x,y,r){
        var options = {
            restituion:0.3,
            density:1.0,
            friction:0.3
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        World.add(world,this.body)
    }

    display(){
        fill("black")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}