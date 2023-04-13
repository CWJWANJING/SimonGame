gameSequence = [];

buttonColours = ["red", "green", "yellow", "blue"];

randomColour = buttonColours[nextSequence()];

blink("#"+randomColour);

playSoundByColour(randomColour);

gameSequence.append(randomColour);

function nextSequence() {
    range = 4;
    randomNumber = Math.floor(Math.random() * range);
    return randomNumber;
}

function blink(colourBtn) {
    $(colourBtn).fadeOut('slow', function() {
        $(this).fadeIn('slow', function() {
            blink(this);
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