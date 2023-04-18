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
        level = checkPattern(userClickedPattern.length-1);
    } 
})

$("body").on("keydown", function () {
    delay = 150; // 0.15 second
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
            setTimeout(function() {
                level++;
                $("h1").text("Level " + level);
                userClickedPattern = [];
                nextSequence();
            }, delay);
        } 
    } else {

        gameOver();

        return 0;
    }

    return level;
}

function gameOver() {
    delay = 250
    playSound("sounds/wrong.mp3");
    $("h1").text("Game over, press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 250);

    restart();
}

function restart() {
    gameSequence = [];
    userClickedPattern = [];
    gameStarted = false;
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