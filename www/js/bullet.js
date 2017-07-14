var BULLET_SIZE=[
      null,
      {x: 86, y: 0, w: 24, h: 26},
      {x: 62, y: 0, w: 25, h: 29},
      {x: 30, y: 0, w: 31, h: 35},
      {x: 32, y: 35, w: 27, h: 31},
      {x: 30, y: 82, w: 29, h: 33},
      {x: 0, y: 82, w: 30, h: 34},
      {x: 0, y: 0, w: 30, h: 44}
    ];
function Bullet(type){
    this.type = type || 1;
    this.x = 0;
    this.y = 0;
    this.rotate = 0;
    this.speed = 10;
    this.timer = null;
    this.move();
}
Bullet.prototype.draw = function(gd){
    var sx = BULLET_SIZE[this.type].x;
    var sy = BULLET_SIZE[this.type].y;
    var w = BULLET_SIZE[this.type].w;
    var h = BULLET_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);//注意：旋转和移动顺序不可调换
    gd.rotate(d2a(this.rotate));    
    gd.drawImage(IMG_OBJ['bullet'],
        sx,sy,w,h,
        -w/2,-h/2,w,h
    )
    gd.restore();
}
Bullet.prototype.move = function(){
    this.timer = setInterval(function(){
        this.x += this.speed * Math.sin(d2a(this.rotate));
        this.y -= this.speed * Math.cos(d2a(this.rotate));
    }.bind(this),30)
}