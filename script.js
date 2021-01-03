// GLobal Scope & things that runs when the page is loaded.
const larry = document.getElementById('larry');
const petPercent = document.getElementById('pet-percent');
const hungerPercent = document.getElementById('hunger-percent');
const date = document.getElementById('date');
const secretButton = document.getElementById('secret-button')
let petPercentWidth = petPercent.style.width;
let hungerPercentWidth = hungerPercent.style.width
let satisfied = document.getElementById('satisfied');
let hand = document.getElementById('hand');
let fish = document.getElementById('fish');
let hungerButton = document.getElementById('hunger-button');
let petButton = document.getElementById('pet-button');
let speakButton = document.getElementById('speak-button');
let petWidth = Math.floor(Math.random() * 31);
let hungerWidth = Math.floor(Math.random() * 31);

document.getElementById("date").innerHTML = 'Current Date: ' + new Date().toLocaleDateString();
// things that runs
function defaultPercent () {
    hungerPercent.style.width = hungerWidth + '%';
    hungerPercent.innerHTML = hungerWidth + '%';
    petPercent.style.width = hungerWidth + '%';
    petPercent.innerHTML = petWidth + '%';
};

//hunger action
const hungerAction = () => {
    let id = setInterval(frame,20);
    function frame(){
        if (hungerWidth === 100) {
            clearInterval(id);
            larry.style.transform = "rotate(0deg)";
            fish.style.visibility = "hidden";
            hungerPercent.style.background = "#37BF18";
            hungerPercent.style.border = "7px solid #37BF18";
            satisfiedAction();
        }
        else if (hungerWidth === 10) {
            larry.style.transform = "rotate(-20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%";
            hungerPercent.innerHTML  = hungerWidth + "%";
        }
        else if (hungerWidth === 20) {
            larry.style.transform = "rotate(20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
            fish.style.visibility = "visible";
            fish.style.clipPath = "inset(5% 20% 15% 20%)";
        }
        else if (hungerWidth === 30) {
            larry.style.transform = "rotate(-20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
        }
        else if (hungerWidth === 40) {
            larry.style.transform = "rotate(20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%";
            hungerPercent.innerHTML  = hungerWidth + "%";
            fish.style.clipPath = "inset(5% 20% 15% 35%)";
        }
        else if (hungerWidth === 50) {
            larry.style.transform = "rotate(-20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
        }
        else if (hungerWidth === 60) {
            larry.style.transform = "rotate(20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
            fish.style.clipPath = "inset(5% 20% 15% 50%)";
        }
        else if (hungerWidth === 70) {
            larry.style.transform = "rotate(-20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%";
            hungerPercent.innerHTML  = hungerWidth + "%";
        }
        else if (hungerWidth === 80) {
            larry.style.transform = "rotate(20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
            fish.style.clipPath = "inset(5% 20% 15% 70%)";
            
        }
        else if (hungerWidth === 90) {
            larry.style.transform = "rotate(-20deg)";
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
        }
        else{
            hungerWidth++;
            hungerPercent.style.width = hungerWidth + "%"
            hungerPercent.innerHTML  = hungerWidth + "%";
        
        }
    }
 };
//pet action
 const petAction = () => {
    let id = setInterval(frame,20);
    function frame(){
        if (petWidth === 100) {
            clearInterval(id);
            larry.style.transform = "rotate(0deg)";
            hand.style.visibility = "hidden";
            petPercent.style.background = "#37BF18";
            petPercent.style.border = "7px solid #37BF18";
            satisfiedAction();

        }
        
        
        else if (petWidth === 10) {
            larry.style.transform = "rotate(-20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.visibility = "visible";
            hand.style.bottom = "320px";
        }
        
        else if (petWidth === 20) {
            larry.style.transform = "rotate(20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.visibility = "visible";
            hand.style.bottom = "270px";
        }
        
        else if (petWidth === 30) {
            larry.style.transform = "rotate(-20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.visibility = "visible";
            hand.style.bottom = "320px";
        }
        else if (petWidth === 40) {
            larry.style.transform = "rotate(20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.visibility = "visible";
            hand.style.bottom = "270px";
        }
        else if (petWidth === 50) {
            larry.style.transform = "rotate(-20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%"
            petPercent.innerHTML  = petWidth + "%";
            hand.style.bottom = "320px";
        }
        else if (petWidth === 60) {
            larry.style.transform = "rotate(20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.bottom = "270px";
        }
        else if (petWidth === 70) {
            larry.style.transform = "rotate(-20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.bottom = "320px";
        }
        else if (petWidth === 80) {
            larry.style.transform = "rotate(20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.bottom = "270px";
        }
        else if (petWidth === 90) {
            larry.style.transform = "rotate(-20deg)";
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
            hand.style.bottom = "320px";
        }
        else{
            petWidth++;
            petPercent.style.width = petWidth + "%";
            petPercent.innerHTML  = petWidth + "%";
        
        }
   
    }
 };

// Speak action 
speakButton.onclick = function speakAction() {
    let audio = document.getElementById('meow');
    audio.play();
};

//cat moving
function catMoving() {
    let larry = document.getElementById('larry');
    let id = setInterval(setPosition, 750);
    function setPosition () {
        if (larry.style.transform === "scaleX(1)") {
          larry.style.transform = "scaleX(-1)";
        } else {
          larry.style.transform = "scaleX(1)"
        }
   
    }
  
};
//onclick events
petButton.onclick = function clickPet() {
    petAction();
};
hungerButton.onclick = function clickHunger() {
    hungerAction();
};
secretButton.onclick = function clickSecret() {
    petAction(),hungerAction()
};


function satisfiedAction()  {
    if (petWidth == 100 && hungerWidth == 100) {
        return satisfied.innerHTML = 'I\'m satisfied, thank you!';
    } else if (petWidth == 100) {
        petButton.disabled = 'disable';
    } else if (hungerButton == 100) {
        hungerButton.disabled = 'disable';
    }
};


catMoving();
defaultPercent();
