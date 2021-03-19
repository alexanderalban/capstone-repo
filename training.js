// Where "hacker" usernames are populated
let arrayOfHackers;

// To load hacker list
onload = function () {
    getHackers(fetch);
}

// Fetches hackers from the third-party API
const getHackers = (fetch) => {
    fetch ('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(hackers => arrayOfHackers = hackers)
    setTimeout(function() {
        console.log(arrayOfHackers)
    }, 1000)
};


// Initial array to populate the fight strings
let fightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

console.log(fightArray.length)

// Values for fight string 1 (this seems like a lot of code for one process, 
// but based on testing this is actually the easiest implementation)
let randomCharacter1 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter2 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter3 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter4 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter5 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter6 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter7 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter8 = fightArray[Math.floor(Math.random() * 69)]

// Values for fight string 2
let randomCharacter9 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter10 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter11 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter12 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter13 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter14 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter15 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter16 = fightArray[Math.floor(Math.random() * 69)]

// Values for fight string 3
let randomCharacter17 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter18 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter19 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter20 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter21 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter22 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter23 = fightArray[Math.floor(Math.random() * 69)]
let randomCharacter24 = fightArray[Math.floor(Math.random() * 69)]

// These are the actual strings that the player will need to match

let fightString1 = randomCharacter1 + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8
let fightString2 = randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15 + randomCharacter16
let fightString3 = randomCharacter17 + randomCharacter18 + randomCharacter19 + randomCharacter20 + randomCharacter21 + randomCharacter22 + randomCharacter23 + randomCharacter24

// Console log to verify functionality
console.log("string 1 =" + " " + fightString1)
console.log("string 2 =" + " " + fightString2)
console.log("string 3 =" + " " + fightString3)


// This initiates the fight, when the fight button is clicked
const fightStart = () => {

    // This will populate the names of the hackers using the randomuser API and the 
    // array that I set up earlier. This way random names will be used every time
    let hackerName1 = arrayOfHackers.results[0].login.username
    let hackerName2 = arrayOfHackers.results[1].login.username
    let hackerName3 = arrayOfHackers.results[2].login.username
    console.log("hacker1 is" + " " + hackerName1)
    console.log("hacker2 is" + " " + hackerName2)
    console.log("hacker2 is" + " " + hackerName3)


    // This will hide the fight button after clicking it,
    //  preventing it from being clicked more than once
    let fightButton = document.getElementById("fight-button")
    if (fightButton.style.visibility = "visible") {
        fightButton.style.visibility = "hidden";
    }

    // The same will be done for the "Badguys Inbound message"
    let badguyAlert = document.getElementById("badguy-alert")
    if (badguyAlert.style.visibility = "visible") {
        badguyAlert.style.visibility = "hidden";
    }

    // This will append the textboxes and names of the hackers, as well as 
    // what the user needs to enter in order to proceed

    let hackerForm = document.getElementById("computer-section");
    let br = document.createElement("br")

    // generates form and sets the attributes
    let form = document.createElement("form")

    // creates the first input and label
    let firstFight = document.createElement("input")
    firstFight.setAttribute("type", "text");
    firstFight.setAttribute("name", "firstBox")
    firstFight.setAttribute("placeholder", "Type here to fight back!")

    let firstLabel = document.createElement("label");
    firstLabel.textContent = hackerName1 + " attacks! Enter " + fightString1

    // creates the second input and label

    let secondFight = document.createElement("input")
    secondFight.setAttribute("type", "text");
    secondFight.setAttribute("name", "secondBox")
    secondFight.setAttribute("placeholder", "Type here to fight back!")

    let secondLabel = document.createElement("label");
    secondLabel.textContent = hackerName2 + " attacks! Enter " + fightString2

    // creates the third input and label

    let thirdFight = document.createElement("input")
    thirdFight.setAttribute("type", "text");
    thirdFight.setAttribute("name", "thirdBox")
    thirdFight.setAttribute("placeholder", "Type here to fight back!")

    let thirdLabel = document.createElement("label");
    thirdLabel.textContent = hackerName3 + " attacks! Enter " + fightString3

    // creates a button for our second function!

    let endFightButton = document.createElement("button")
    endFightButton.innerHTML = "Enter!"

    // This will append the created elements to our form
    form.appendChild(firstLabel);
    form.appendChild(firstFight);
    form.appendChild(br);
    form.appendChild(br.cloneNode());
    form.appendChild(secondLabel);
    form.appendChild(secondFight);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    form.appendChild(thirdLabel);
    form.appendChild(thirdFight);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    form.appendChild(endFightButton);

    // This will append the form itself, with all the elements included
    hackerForm.appendChild(form);

    //This is the end for training, since it will loop by default when the
    // endFightButton is clicked
}