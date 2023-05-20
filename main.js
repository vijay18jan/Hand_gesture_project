Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Camera = document.getElementById("camera");
Webcam.attach(Camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML ="<img id='captured_image' src = '"+data_uri+"'>";
    });
}
console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8goX0JNT3/model.json",model_loaded);
function model_loaded(){
    console.log("model is loaded");
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The First prediction is"+ predicition1;
    speak_data2 ="And the Second prediction is"+ predicition2;
    var utter_this = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utter_this);
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if (error){
        console.error(error);
    }
else  {
    console.log(result);
    document.getElementById("result_getsure_name").innerHTML = result[0].label;
predicition1 = result[0].label;
speak();
if (result[0].label == "Thumbs-Up"){
    document.getElementById("update_emoji").innerHTML = "&#128077";
}
if (result[0].label == "Peace"){
    document.getElementById("update_emoji").innerHTML = "&#9996;";
}
if (result[0].label == "Nice"){
    document.getElementById("update_emoji").innerHTML = "&#128076;";
}
}}


