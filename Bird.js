class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    //loading smoke image
    this.smokeImage = loadImage("sprites/smoke.png");
    //making trajectary variable
    this.trajectary=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //if body's velocity x is greater than 10 and position.x is greater than 200 then ...
if(this.body.velocity.x > 10 && this.body.position.x > 200){
  //giving position 2 values i.e storing in [array]
  var position= [this.body.position.x,this.body.position.y];
  //inserting position
  this.trajectary.push(position);
}

    
//for loop statement
    for(var i=0; i< this.trajectary.length;i++){
      //loading image for smoke
      image(this.smokeImage,this.trajectary[i][0],this.trajectary[i][1]);
    }
  }
}
