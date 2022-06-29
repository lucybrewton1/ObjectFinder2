status = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    webcam = createCapture(480, 380);
    webcam.hide();
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    input = document.getElementById("input").value;
}
function modelLoaded() {
    console.log("Model is Loaded");
    status = true;
}
function draw() {
    image(webcam, 0, 0, 480, 380);
}