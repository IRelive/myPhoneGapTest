var FISH_NET_SIZE=[
      null,
      {x:333,y:374,w:88,h:85},
      {x:14,y:414,w:110,h:108},
      {x:178,y:370,w:126,h:125},
      {x:257,y:197,w:144,h:146},
      {x:0,y:246,w:162,h:152},
      {x:242,y:0,w:180,h:180},
      {x:23,y:23,w:197,h:197}
    ];
function Fishnet(type){
    this.type = type || 1;
    this.x = 0;
    this.y = 0;
    this.scale = 0.5;
    this.timer = null;
    this.move();
}
Fishnet.prototype.draw = function(gd){
    var sx = FISH_NET_SIZE[this.type].x;
    var sy = FISH_NET_SIZE[this.type].y;
    var w = FISH_NET_SIZE[this.type].w;
    var h = FISH_NET_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y)
    gd.scale(this.scale,this.scale);
    gd.drawImage(IMG_OBJ['web'],sx,sy,w,h,
        -w/2,-h/2,w,h
    )
    gd.restore();
}
Fishnet.prototype.move = function(){
    this.timer = setInterval(function(){
        this.scale += 0.1;
        if(this.scale >= 1){
            clearInterval(this.timer);
        }
    }.bind(this),50);
}