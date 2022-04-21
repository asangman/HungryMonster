class Spike
{
  constructor(s,gs,r)
  {
    this.r = r;
    this.x = width;
    this.y = height - this.r;
    this.s = s;
    this.gs = gs;
  }

  move()
  {
    this.x -= this.s;
  }

  show()
  {
    // translate(this.x+75,this.y+75);
    // rotate(CENTER);
    //image(this.gs[c],this.x,this.y,150,150)
    //translate(0,0);
    animation(this.gs,this.x,this.y)
  }
}