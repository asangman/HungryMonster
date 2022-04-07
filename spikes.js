class Spike
{
  constructor(s,gs)
  {
    this.r = random(150,600);
    this.x = width;
    this.y = height - this.r;
    this.s = s;
    this.gs = gs;
  }

  move()
  {
    this.x -= this.s;
  }

  show(c)
  {
    image(this.gs[c],this.x,this.y,150,150)
  }
}