function Score(val){
    this.val = val || 1000;
    this.x = 20;
    this.y = 575;

}
Score.prototype.draw = function(gd){
    var score = this.fillZero(this.val);
    var w = 23;
    var h = 24;
    gd.save();
    for(var i = 0; i < score.length; i ++){
        var sy = (9 - parseInt(score.charAt(i))) * h;
        gd.drawImage(IMG_OBJ['number_black'],
        0,sy,w,h, this.x,this.y,w,h
        )
        gd.translate(w,0);
    }
    gd.restore();
}
Score.prototype.fillZero = function(n){
    var str = n+"";
    var l = str.length;
    for(var i = 0;i <6 - l; i ++){
        str = "0"+str;
    }
    return str;
}