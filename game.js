gameSequence = [];

buttonColours = ["red", "green", "yellow", "blue"];

randomColour = buttonColours[nextSequence()];

blink("#"+randomColour);

gameSequence.append(randomColour);

function nextSequence() {
    range = 4;
    randomNumber = Math.floor(Math.random() * range);
    return randomNumber;
}

function blink(selector) {
    $(selector).fadeOut('slow', function() {
        $(this).fadeIn('slow', function() {
            blink(this);
        });
    });
}
