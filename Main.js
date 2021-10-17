Webcam.set({
    width:350,
    height:300,
    Image_format:"jpg",
    jpg_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='Capture_image' src='"+data_uri+"'>";
    }
}
