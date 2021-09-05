function startClassification(){
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2KTqX_ZNw/model.json", modelReady())
}

function modelReady(){
    classifier.classify(gotResult)
}

function gotResult(){
    console.log("gotResult")
}