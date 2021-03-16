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

