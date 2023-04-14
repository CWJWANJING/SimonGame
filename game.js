userClickedPattern = [];

userClickedColour = "";

gameSequence = [];

gameStarted = false;

level = 0;

$(".btn").click(function() {
    delay = 700
    if (gameStarted == true) {
        userClickedColour = $(this).attr("id");
        playSoundByColour(userClickedColour);
        blink("#"+userClickedColour, 1);
        userClickedPattern.push(userClickedColour);

        setTimeout(function() {
            console.log(level);
            level = checkPattern(level);
        }, delay);

        
    }
})

$("body").on("keydown", function () {
    delay = 150; // 0.5 second
    if (gameStarted == false) {
        setTimeout(function() {
            gameStarted = true;
            nextSequence();
            $("h1").text("Level " + level);
        }, delay);
    }
  });

buttonColours = ["red", "green", "yellow", "blue"];

function checkPattern(level) {
    delay = 700;
    if (userClickedPattern[level] === gameSequence[level]) {
        if (userClickedPattern.length === gameSequence.length) {
            console.log(gameSequence);
            console.log(userClickedPattern);
            level++;
            $("h1").text("Level " + level);
            console.log(level);
            userClickedPattern = [];
            setTimeout(function() {
                nextSequence();
            }, delay);
        }
    }

    return level;
}

function nextSequence() {
    range = 4;
    randomNumber = Math.floor(Math.random() * range);
    randomColour = buttonColours[randomNumber];
    blink("#"+randomColour, 1);
    playSoundByColour(randomColour);
    gameSequence.push(randomColour);
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