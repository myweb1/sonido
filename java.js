function setup() {
    canvas = createCanvas(300,300)
    sound.play()
    sound.setVolume (0.5)
    sound.rate (0.5)
    videoo = createCapture(VIDEO)
    ml500 = ml5.poseNet(videoo,listo)
    ml500.on("pose",net)
}

function preload() {
    sound = loadSound("Revenge.mp3")
}

function draw() {

}

function net(k) {
    if (k[0]) {
        yleft = k[0].pose.leftWrist.y
        yright = k[0].pose.rightWrist.y
        console.log("yleft"+yleft)
    }
}

function listo() {
    console.log("listo")
}