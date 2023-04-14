userClickedPattern = [];

userClickedColour = "";

gameSequence = [];

gameStarted = false;

level = 0;

$(".btn").click(function() {
    if (gameStarted == true) {
        userClickedColour = $(this).attr("id");
        playSoundByColour(userClickedColour);
        blink("#"+userClickedColour, 1);
        userClickedPattern.push(userClickedColour);
    }
})

$("body").on("keydown", function () {
    delay = 150; // 0.5 second
    if (gameStarted == false) {
        setTimeout(function() {
            gameStarted = true;
            nextSequence();
        }, delay);
    }
  });

buttonColours = ["red", "green", "yellow", "blue"];

function nextSequence() {
    range = 4;
    randomNumber = Math.floor(Math.random() * range);
    randomColour = buttonColours[randomNumber];
    blink("#"+randomColour, 1);
    playSoundByColour(randomColour);
    gameSequence.push(randomColour);
    $("h1").text("Level " + level);
    level += 1;
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