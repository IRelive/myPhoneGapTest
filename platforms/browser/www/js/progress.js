function Progress(){
    this.curScore = 0;
    this.targetScore = 2000;

}
Progress.prototype.draw = function(gd){
    var w = 214;
    var h = 18;
    var p = this.curScore / this.targetScore * w;
    console.log(p+":"+this.curScore)
    gd.drawImage(IMG_OBJ['bottom'],0,104,p,h, 543,600-26,p,h);
}