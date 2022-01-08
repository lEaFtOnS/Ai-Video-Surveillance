Video=""
Status=""
Objects=""
function setup() {
   Canvas= createCanvas(500,500)
   Canvas.position(450,200)
    
}

function preload() {
    Video=createVideo("video.mp4")
    Video.hide()



    
}

function draw() {
    image(Video,1,1,500,500)
    if (Status!="") {
    objectDetector.detect(Video,gotResult)
   for (i=0;i<Objects.length;i++){
    fill("red")   
    text(Objects[i].label,Objects[i].x,Objects[i].y+15)
    noFill()
    stroke("red")
    rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height)      
}
       
   }
        
    }    
    

function  Video_start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Detecting Objects"

}

function modelLoaded() {
    console.log("Model  is  loaded")
    Status=true
    Video.loop()
    Video.speed(1)
    Video.volume(0)
    
}


function gotResult(error,result) {
if (error) {
    console.log(error)
    
}
else {
console.log(result)
Objects=result
}
}