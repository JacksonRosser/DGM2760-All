
//Welcome section
let userName = prompt("What is your name fellow pokemon trainer?")
let welcomeMessage = `Welcome ${userName}! ready to catch some pokemon?`
document.querySelector('#welcomeMessage').innerText = welcomeMessage
//ASYNC FUNCTION AND JSON/API

async function getPokeData() {

    try {
        const response = await fetch('javascript/pokemon.json')
        return await response.json() //return the JSON object 
    } catch (error) {
        console.error(error)
    }
}
let pokeData = {}
getPokeData().then(data => pokeData = data)
var anchor = document.querySelectorAll('a')
anchor.forEach(title => { title.addEventListener('click', pokeInfo) });
function pokeInfo(event) {
    let pokeChoice = pokeData.starters.find(starters => {
        return event.target.id === starters.name.toLowerCase()
    })
    console.log(pokeChoice)
    console.log(pokeChoice.name)
    document.querySelector("#pokeName").textContent = `${pokeChoice.name}`
    document.querySelector("#type").textContent = `  ${pokeChoice.type}`
    document.querySelector("#evolution").textContent = `  ${pokeChoice.evolution}`
    document.querySelector("#pokedex").textContent = `  ${pokeChoice.pokedex}`
    document.querySelector('#pokeImage').setAttribute('src', `images/${pokeChoice.name}.jpg`)
}




//object that holds properties and a method
const newDiv = document.querySelector('#gameDisplay')
        let newImg = document.createElement('img')
        newDiv.appendChild(newImg)
const pokePictures = {
    redBlue: "images/redBlue.jpg",
    first: 1,
    rubySaph: "images/rubySaph.jpg",
    second: 2,
    sunMoon: "images/sunMoon.jpg",
    third: 3,
    swordShield: "images/swordShield.jpg",
    forth: 4,

    checkButton: (buttonChoice) => {
        

        if (buttonChoice === 'a') {
            document.querySelector('#message').innerText = `That's a good one ${userName}!`
            if(newImg.hasAttribute('src'===true)){
                console.log("image has source")
                //newDiv.removeChild(newImg)
                //newImg.setAttribute('src', `${pokePictures.redBlue}`)
                //newDiv.appendChild(newImg)
            }
            else{
            
            newImg.setAttribute('src', `${pokePictures.redBlue}`)
            }
        }
        else if (buttonChoice === 'b') {
            document.querySelector('#message').innerText = `Good pick ${userName}!`
            if(newImg.hasAttribute('src'===true)){
                console.log("image has source")
                //newDiv.removeChild(newImg)
                //newImg.setAttribute('src', `${pokePictures.rubySaph}`)
                //newDiv.appendChild(newImg)
            }else{
            newImg.setAttribute('src', `${pokePictures.rubySaph}`)
            }
        }
        else if (buttonChoice === 'c') {
            document.querySelector('#message').innerText = `You have great taste ${userName}!`
            if(newImg.hasAttribute('src'===true)){
                newDiv.removeChild(newImg)
            }
            newImg.setAttribute('src', `${pokePictures.sunMoon}`)
            //newDiv.appendChild(newImg)
        }
        else if (buttonChoice === 'd') {
            document.querySelector('#message').innerText = `That one is a ton of fun ${userName}!`
            if(newImg.hasAttribute('src'===true)){
                newDiv.removeChild(newImg)
            }
            newImg.setAttribute('src', `${pokePictures.swordShield}`)
            //newDiv.appendChild(newImg)
        }
        else{
            console.log("press a button")
        }
        
    }
}
//Identify Buttons
document.querySelector('#redBlue').addEventListener('click', ()=> pokePictures.checkButton('a'))
document.querySelector('#rubySaph').addEventListener('click', ()=> pokePictures.checkButton('b'))
document.querySelector('#sunMoon').addEventListener('click', ()=> pokePictures.checkButton('c'))
document.querySelector('#swordShield').addEventListener('click', ()=> pokePictures.checkButton('d'))

