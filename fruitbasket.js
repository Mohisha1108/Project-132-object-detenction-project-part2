var status = '';
var objects =[];
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object detecting";
}
function modelLoaded(){
    console.log('model is loaded');
    status = true;
    objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function preload(){
    img = loadImage("fruit-basket.jpg");
}
function draw(){
    image(img,0,0,500,500);
}
function back(){
    window.location = 'fruit.html';
}