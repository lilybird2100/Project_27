class Bob {
    constructor(x,y,raidus){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:1.2
        }   
        this.body = Bodies.circle(x,y,raidus, options);
        this.raidus = raidus; 
        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
       // imageMode(CENTER);
       ellipseMode(RADIUS);
        ellipse(0, 0, this.raidus, this.raidus);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        pop();
    }

}
