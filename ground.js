class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h;

        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER)
        push()
        fill('brown')
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    
    }
}