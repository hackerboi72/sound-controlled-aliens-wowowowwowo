function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    }); 
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rHRxppkz-/model.json", modelloaded)}
function modelloaded () {
    classifier.classify(gotresult) 
}
function gotresult (error, result) {
    if(error) {
        console.error(error)
    }else{
        console.log(result)

        document.getElementById("result_label").innerHTML = "i can hear " + result[0].label}
        document.getElementById("result_confidence").innerHTML = "accuracy " + (result[0].confidence*100).toFixed(2) + "%"
        img1 = document.getElementById("walmart_shrek_part1")
        img2= document.getElementById("walmart_shrek_part2") 
        img3 = document.getElementById("pink_dissapointment")
        img4 = document.getElementById("smurf_but_worse")
        if(result[0].label=="clapping") {
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png" 
        }
        else if(result[0].label=="intense fan noises"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if(result[0].label=="table drum ") {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }
        else {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
}