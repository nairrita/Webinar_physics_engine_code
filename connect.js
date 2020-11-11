class Connect{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB: body2,
            length: 100,
            stiffness: 0.5
        }
        this.connect = Constraint.create(options)
        World.add(world,this.connect)
    }

    display(){
        strokeWeight(4)
        stroke("white")
        var pointA = this.connect.bodyA.position
        var pointB =  this.connect.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       
    }
}