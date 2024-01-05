function playDrum(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            let kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        default:
            console.log(this.innerHTML);
    }
}

function btnAnimation(key) {
    // to access button we will use "key". 
    let animatedBtn = document.querySelector("." + key);
    animatedBtn.classList.add("pressed"); // class is added and next line will be read by interpreter.
    setTimeout(function () {  // setTimeout is used to perform an action/function after a timeout/delay.
        animatedBtn.classList.remove("pressed") // it will take function that has command to remove 'pressed' class.
    }, 150);
}

let drumArray = document.querySelectorAll(".drum");

for (i = 0; i < drumArray.length; i++) {
    drumArray[i].addEventListener("click", function () {
        let key = this.innerHTML;  //'this' gives me the query/HTML block/tag the is being accessed using 
        // the querySelector we then use innerHTML to access HTML of this block/tag
        playDrum(key);
        btnAnimation(key);
    });
}

document.addEventListener("keydown", function (event) { //"event" stores the data of the event this is being listened.
    let key = event.key;  // this "event" further has more attributes/data in it.
    // Eg- key/keycode/etc which can be accessed by event.key or event.keycode.
    playDrum(key);
    btnAnimation(key);
    //console.log(key);gives key//this data can then be used for eg here, to check switch case.
});

// use debugger; to enter debug mode
