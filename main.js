canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1width=100;
car1height=90;
car1x=10;
car1y=10;
var backgroundimage="https://media.istockphoto.com/photos/finish-line-on-the-racetrack-in-motion-blur-with-stadium-and-picture-id1055955480?k=6&m=1055955480&s=612x612&w=0&h=4G-uNau-6uynVU1ZCka0aj_T1fZ8xx6OqJdAbTqTmbs=";
randomnumber=Math.floor(Math.random()*2);

var car1image="https://image.shutterstock.com/image-vector/speeding-race-car-vector-icon-260nw-271802702.jpg";
function add(){
     bgimage=new Image();
    bgimage.onload=uploadbg;
    bgimage.src=backgroundimage;
     car1img=new Image();
    car1img.onload=uploadcar1;
    carimg.src=car1image;
}
function uploadbg(){
    ctx.drawImage(bgimage, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1img, car1x, car1y, car1width, car1height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypress=e.keyCode;
    if(keypress=="38"){
        up();
    }
    if(keypress=="40"){
        down();
    }
    if(keypress=="37"){
        left();
    }
    if(keypress=="39"){
        right();
    }
}
function up(){
    if (rovery>=0){
        car1y=car1y-10;
        uploadbg();
        uploadcar1();
    }
}
function down(){
    if (car1<=500){
        car1y=cary+10;
        uploadbg();
        uploadcar1();
    }
}
function left(){
    if (car1x>=0){
        car1x=car1x-10;
        uploadbg();
        uploadcar1();
    }
}
function right(){
    if (car1<=800){
        car1x=car1x+10;
        uploadbg();
        uploadcar1();
    }
}
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");