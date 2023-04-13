$(document).ready(function(){
    repeat = 1;
    
    $("#red").click(function(){
        playSoundByColour("red");
        blink("#red", repeat);
    });
    $("#green").click(function(){
        playSoundByColour("green");
        blink("#green", repeat);
    });
    $("#yellow").click(function(){
        playSoundByColour("yellow");
        blink("#yellow", repeat);
    });
    $("#blue").click(function(){
        playSoundByColour("blue");
        blink("#blue", repeat);
    });
});

gameSequence = [];

buttonColours = ["red", "green", "yellow", "blue"];

randomColour = buttonColours[nextSequence()];

blink("#"+randomColour, 1);

playSoundByColour(randomColour);

gameSequence.append(randomColour);

function nextSequence() {
    range = 4;
    randomNumber = Math.floor(Math.random() * range);
    return randomNumber;
}

function blink(colourBtn, repeat) {
    if(!repeat) return;
    $(colourBtn).fadeOut(150, function() {
        $(this).fadeIn(150, function() {
            blink(this, repeat - 1);
        });
    });
}

function playSoundByColour(colour) {
    switch(colour) {
        case "red":
            playSound("sounds/red.mp3");
        case "green":
            playSound("sounds/green.mp3");
        case "yellow":
            playSound("sounds/yellow.mp3");
        case "blue":
            playSound("sounds/blue.mp3");
    }
}

function playSound (audioPath) {
    audio = new Audio(audioPath);
    audio.play();
}