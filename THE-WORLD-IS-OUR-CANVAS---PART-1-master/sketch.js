var drawing=[];
var currentPath=[];
var red,yellow,blue,green
var fred,fyellow,fblue,fgreen
var max,min
function setup() {
  canvas = createCanvas(1000, 600);
  canvas.mousePressed(start);
 red=createButton("red",30,30)
 yellow=createButton("yellow",30,50)
 blue=createButton("blue",50,50)
 green=createButton("green",70,50)
 fred=createButton("red",80,30)
 fyellow=createButton("yellow",80,50)
 fblue=createButton("blue",80,50)
 fgreen=createButton("green",80,50)
 max=createButton("bold",80,30)
 min=createButton("thin",80,50)
}

function draw() {
  background("white");

  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  
  strokeWeight(4);
  
  red.mousePressed(()=>{
  stroke("red") })

  yellow.mousePressed(()=>{
    stroke("yellow") })

    blue.mousePressed(()=>{
      stroke("blue") })
      green.mousePressed(()=>{
        stroke("green") })

        fred.mousePressed(()=>{
          fill("red") })
        
          fyellow.mousePressed(()=>{
            fill("yellow") })
        
            fblue.mousePressed(()=>{
          fill("blue") })
              fgreen.mousePressed(()=>{
                fill("green") })

                max.mousePressed(()=>{
                 strokeWeight(20) })  
                 
                 min.mousePressed(()=>{
                  strokeWeight(8) })

  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

}
function start(){
  currentPath=[];
  drawing.push(currentPath);
}
