
class Rope{
    constructor(body1, body2, offsetX, offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        /*this.sling1 = loadImage("sprites/sling1.png"); 
        this.sling2 = loadImage("sprites/sling2.png"); 
        this.sling3 = loadImage("sprites/sling3.png")*/
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body; 
    } 
    display(){
        /*image(this.sling1, 250, 20); 
        image(this.sling2, 222, 20); */
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48,22, 8); 
            //if(pointA.x < 250){
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //image(this.sling3, pointA.x-30, pointA.y-10, 15, 30); 
            //line(pointA.x+20, pointA.y, pointB.x+40, pointB.y-3);
           // }
           /*else{
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                image(this.sling3, pointA.x+20, pointA.y-10, 15, 30); 
                line(pointA.x+20, pointA.y, pointB.x+40, pointB.y-3);
                    
           }*/ 
        }
    }