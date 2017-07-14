function Coin(opts){
    opts = opts || {};
    this.type = opts.type || 1;
    this.x = opts.x || 0;
    this.y = opts.y || 0;
    
    this.speed = 5;
    this.cur = 0;
    this.timer = null;
    this.scale = 1;
    this.move();
    this.audioPlay();
}
Coin.prototype.draw = function(gd){
    var coinType = 0;
    if(this.type < 3){
        coinType = 1;
    }else{
        coinType = 2;
    }
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    gd.drawImage(IMG_OBJ['coinAni'+coinType],
        0,this.cur * 60,60,60,
        -30,-30,60,60
    )
    gd.restore();
}
//金币声效
Coin.prototype.audioPlay = function(){
    var au = new Audio();
    au.src = "data/coin.wav";
    au.play();
}
Coin.prototype.move = function(){
    //收集运动
    this.collectTimer = setInterval(function(){
        this.x += (80-this.x) / 20;
        this.y += (600-this.y) / 20;
       //金币缩放
        if(this.scale > 0.2){
            this.scale -= 0.01;
        }
        //如果金币到达了收集框，清楚定时器
        if(this.x < 120 && this.x > 10 && this.y > 560){
            clearInterval(this.collectTimer);
        }
    }.bind(this),30);
   
    //自身旋转
    this.rotateTimer = setInterval(function(){
        if(this.cur < 9){//旋转一周后，旋转动画结束
            this.cur ++;            
        }else{
            clearInterval(this.timer);
        }
    }.bind(this),100);
}
