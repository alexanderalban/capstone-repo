// this is declaring the variables for the various Peteys

let main = document.getElementById("main-image");
let agent = document.getElementById("default");
let cowboy = document.getElementById("cowboy");
let dragon = document.getElementById("dragon");
let knight = document.getElementById("knight");
let pilot = document.getElementById("pilot");
let robot = document.getElementById("robot");
let scuba = document.getElementById("scuba");
let space = document.getElementById("space");
let wizard = document.getElementById("wizard");


// This is the onclick events to change the main image

agent.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Petey2.0.png"){
        main.src = "images/Petey2.0.png"
    }
});

cowboy.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Cowboy-Petey.png"){
        main.src = "images/Cowboy-Petey.png"
    }
});

dragon.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Dragon-Petey.png"){
        main.src = "images/Dragon-Petey.png"
    }
});

knight.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Knight-Petey.png"){
        main.src = "images/Knight-Petey.png"
    }
});

pilot.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Pilot-Petey.png"){
        main.src = "images/Pilot-Petey.png"
    }
});

robot.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Robo-Petey.png"){
        main.src = "images/Robo-Petey.png"
    }
});

scuba.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Scuba-Petey.png"){
        main.src = "images/Scuba-Petey.png"
    }
});

space.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Space-Petey.png"){
        main.src = "images/Space-Petey.png"
    }
});

wizard.addEventListener('click', function(event) {
    console.log('click')
    if (main.getAttribute('src') !== "images/Wizard-Petey.png"){
        main.src = "images/Wizard-Petey.png"
    }
});