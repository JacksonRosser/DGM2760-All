document.querySelector("#title").innerText = "Guessing Game"
document.querySelector("#slogan").innerText = "A Fun Game for Everyone!"


//pick a random number between 0 and 16
let correctNumber = Math.floor(Math.random() * 15)
correctNumber++

//initialize variables before any guesses are made
let userNum = false
let totalGuesses = 0
let gamerGuess = 0


//After ever guess, the number of guesses must increment and the guess iteself must be evaluated; 
//if low, say so
//if high, say so
//if right on, say so, give reward, game over message

function evalGuess() {
    totalGuesses += 1
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')
    console.log(gamerGuess, correctNumber, totalGuesses)

    const attempts = document.querySelector("#attempts")


    if (gamerGuess == correctNumber) {
        feedback.innerText = "Right On! You win!"
        //After winning, award a ribbon
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = "Too high, try again"
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = "Too low, try again"
    } else {
        feedback.innerText = "Please enter a " + '\n' + "NUMBER between" + '\n' + "1 and 15 and try again"
        totalGuesses -= 1
    }


    attempts.innerText = totalGuesses
}
function giveAward() {
    console.log("congraduritos")
    let imagePath="#"
switch(totalGuesses){
    
    case 1:
    case 2:
    case 3:
        awardImage.setAttribute('src', 'images/blueRibbon.png')
        console.log("blue ribbon be urz")
        break;
    case 4:
    case 5:
    case 6:
        awardImage.setAttribute('src', 'images/redRibbon.png')
        console.log('red ribon foi ya')
        break;
    default:
        console.log('yella ribzy iz heya')
        awardImage.setAttribute('src', 'images/yellowRibbon.png')
}

}
const awardImage = document.createElement('img')//creates an image tag with no src
//awardImage.setAttribute('src', 'images/blueRibbon.png')
const ribbon = document.querySelector('#ribbon')//selects ribbon div
ribbon.appendChild(awardImage)//adds img tag to div element, now we just need to change the image src depending on the case

