class Ball{
    constructor(x,y,r){
        var options = {
            density:1.0,
            friction:0.3,
            restitution:1.0

        }
        this.body = Bodies.circle(x,y,r,options)
     
        this.r = r;
        
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}