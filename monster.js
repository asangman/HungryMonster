class Monster
{
  constructor(m, m2)
  {
    this.r = 150
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 3;
    this.m = m;
    this.m2 = m2;
  }

  jump()
  {
    this.vy = -30;
  }

  hitsS(objects) 
  {
    let x1 = this.x + 50;
    let y1 = this.y + 50;
    let x2 = objects.x + 75;
    let y2 = objects.y + 75;
    return collideCircleCircle(x1, y1, 50, x2, y2, 75);
  }

  hitsF(objects) 
  {
    let x1 = this.x + 50;
    let y1 = this.y + 50;
    let x2 = objects.x + 25;
    let y2 = objects.y + 25;
    return collideCircleCircle(x1, y1, 50, x2, y2, 25);
  }

  move()
  {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);

    this.x = mouseX - 50;
    this.x = constrain(this.x, 50, 1250);
  }

  show()
  {
    image(this.m,this.x,this.y,100,100)
  }

  showBack()
  {
    image(this.m2,this.x,this.y,100,100)
  }

  showDemo()
  {
    image(this.m,175,this.y,100,100)
  }

  moveDemo()
  {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, 375);

    if(this.y == 375)
    {
      this.jump();
    }
  }
}