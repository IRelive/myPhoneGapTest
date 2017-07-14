var FISH_SIZE=[
      null,
      {w: 55, h: 37, collR: 17},
      {w: 78, h: 64, collR: 24},
      {w: 72, h: 56, collR: 20},
      {w: 77, h: 59, collR: 22},
      {w: 107, h: 122, collR: 29},
      {w:509,h:270,collR:120},
	  {w:516,h:273,collR:125}
    ];
function Fish(opts){
      opts = opts || {};
      this.type = opts.type || 1;
      this.x = opts.x || 0;
      this.y = opts.y || 0;
      this.rotate = opts.rotate || 0;
      this.cur = 0;
      this.collR = 0;
      this.liveState = 0;//0-活着，1-中弹后挣扎，2-收网（即鱼消失）
      this.speed = 1;
      this.forwardTimer = null;
      this.rockTimer = null;
      this.move();
}
// function Fish(type){
//     this.type = type || 1;
//     this.x = 0;//鱼出现的初始位置
//     this.y = 0;//鱼出现的初始位置
//     this.rotate = 0;//鱼前进的角度
//     this.speed = 1;
//     this.cur = 0;//图片下标
//     this.collR = 0;//每条鱼的区域半径
//     this.move();
// }
//鱼移动
Fish.prototype.move = function(){
    var that = this;
    //每一个变量只能保存一个定时器，所以当多次给一个变量赋值定时器后，那么这个变量只保存着最后一个定时器的返回值。
    //也就是说清楚定时器也只能清楚最后一个。所以要控制多个定时器就要定义多个变量。
    this.forwardTimer= setInterval(function(){//前进
        if(that.liveState == 1){//如果是死鱼,不前进,清楚定时器
            that.cur = 4;
            clearInterval(that.forwardTimer);
        }
        that.x += that.speed * Math.cos(d2a(that.rotate));
        that.y += that.speed * Math.sin(d2a(that.rotate));
    },30);
    this.rockTimer = setInterval(function(){//摆尾
        that.cur ++;
        if(that.liveState == 0){
            if(that.cur == 4){
                that.cur = 0;
            } 
        }
        if(that.cur == 8){//当挣扎状态循环一遍后即可让鱼消失
            that.liveState = 2;
        }
    },300);
    
}
//绘制鱼
Fish.prototype.draw = function(gd){
    var w = FISH_SIZE[this.type].w;
    var h = FISH_SIZE[this.type].h;
    this.collR = FISH_SIZE[this.type].collR;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    if(this.rotate > 90 && this.rotate < 270){
        gd.scale(1,-1);//处理影子，y方向上下翻转,
    }
    gd.drawImage(IMG_OBJ['fish'+this.type],
    0,this.cur * h,w,h,
    -w/2,-h/2,w,h
    );
    gd.restore();
}
Fish.prototype.isHited = function(x,y){
    var a = this.x - x;
    var b = this.y - y;
    var c = Math.sqrt(a*a + b*b);
    if(c < this.collR){
        return true;
    }
    return false;
}