class Chain{
    constructor(body1,pointB){
        var options = {
            bodyA:body1,
            pointB:pointB,
            lenght:20,
            stiffness: 0.01
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)
        World.add(world,this.chain)

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}