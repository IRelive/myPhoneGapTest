function CoinText(opts){
    opts = opts || {};
    this.type = opts.type || 1;
    this.x = opts.x || 0;
    this.y = opts.y || 0;
    this.speed = 1;  
    this.coinText = 0;
}
CoinText.prototype.draw = function(gd){
    var w = 36;
    var h = 49;
    var ct = 0;
    this.y --;
    gd.drawImage(IMG_OBJ['coinText'],w*10,0,w,h, this.x,this.y,w,h);
    gd.save();
    switch(this.type){
        case 1 : //1
            this.coinText = 1;
            gd.drawImage(IMG_OBJ['coinText'],w*1,0,w,h, this.x+w,this.y,w,h);
        break;
        case 2 : //5
            this.coinText = 5;
            gd.drawImage(IMG_OBJ['coinText'],w*5,0,w,h, this.x+w,this.y,w,h);
        break;
        case 3 : //10
            this.coinText = 10;
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*1,0,w,h, this.x,this.y,w,h);
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*0,0,w,h, this.x,this.y,w,h);
        break;
        case 4 : //20
            this.coinText = 20;
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*2,0,w,h, this.x,this.y,w,h);
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*0,0,w,h, this.x,this.y,w,h);
        break;
        case 5 : //30
            this.coinText = 30;
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*3,0,w,h, this.x,this.y,w,h);
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*0,0,w,h, this.x,this.y,w,h); 
        break;
        case 6 : //50
            this.coinText = 50;
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*5,0,w,h, this.x,this.y,w,h);
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*0,0,w,h, this.x,this.y,w,h); 
        break;
        case 7 : //100
            this.coinText = 100;
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*1,0,w,h, this.x,this.y,w,h);
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*0,0,w,h, this.x,this.y,w,h); 
            gd.translate(w,0);
            gd.drawImage(IMG_OBJ['coinText'],w*0,0,w,h, this.x,this.y,w,h);
        break;
    }   
    gd.restore();
}