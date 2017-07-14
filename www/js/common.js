//加载图片资源
function loadImgs(imgArr,fnSus,progress) {
    var count = 0;
    for(var i = 0;i < imgArr.length; i ++){
        var oImg = new Image();
        oImg.src = "img/"+imgArr[i]+".png";
        (function(index){
             oImg.onload = function(){
                 IMG_OBJ[imgArr[index]] = this;//保存加载完毕的图片对象
                count++;
                if(count == imgArr.length){
                    fnSus && fnSus();//加载完成回调函数
                }
                progress && progress(count,arr.length);//加载进度回调函数
            }
        })(i);
       
    }
}
//随机数
function rnd(n,m){
    return Math.floor(Math.random() * (m - n)) + n;
}
//角度转弧度
function d2a(deg){
    return deg * Math.PI / 180;
}
//弧度转角度
function a2d(arc){
    return arc * 180 / Math.PI;
}
