function setup() {
    canvas = createCanvas(300,300)
    sound.play()
    sound.setVolume (0.5)
    sound.rate (0.9)
    videoo = createCapture(VIDEO)
    ml500 = ml5.poseNet(videoo,listo)
    ml500.on("pose",net)
}
var yleft = 0
var yright = 0
var confidenceright = 0
var confidenceleft = 0
function preload() {
    sound = loadSound("Revenge.mp3")
}

function draw() {
    if (!sound.isPlaying() ) {
sound.play()
    }
    if (confidenceright > 0.2 ) {

        if (yright < 150 ) {
            sound.rate(2)
        }
        else if (yright < 300) {
            sound.rate(0.9)
        }
        else if (yright < 450) {
            sound.rate(0.5)
        }
        document.getElementById("quedecepcion").innerHTML="vel. = "+sound.rate()+"x"
    }
    if (confidenceleft > 0.2 ) {
        volumen = 1 - (yleft / 450)
        sound.setVolume(volumen)
        document.getElementById("quegratitud").innerHTML= "vol. = "+volumen+"x"
    }

}

function net(k) {
    if (k[0]) {
        yleft = k[0].pose.leftWrist.y
        yright = k[0].pose.rightWrist.y
        confidenceleft = k[0].pose.leftWrist.confidence
        confidenceright = k[0].pose.rightWrist.confidence
        console.log("yleft"+yleft) 
    }
}

function listo() {
    console.log("listo")
}