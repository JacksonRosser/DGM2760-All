// create an async function to deploy at an unconventional time

async function getPokeData(){

    try {
        const response = await fetch('javascript/pokemon.json')
        return await response.json() //return the JSON object 
    } catch (error) {
        console.error(error)}
}

let pokeData = {}

getPokeData().then(data=> pokeData = data)


var anchor = document.querySelectorAll('a')
anchor.forEach(title => {title.addEventListener('click', pokeInfo)});

//make click handlers
function pokeInfo(event){
    //find out what was clicked, match the name with JSON
    
    let pokeChoice= pokeData.starters.find(starters=>{
        return event.target.id === starters.name.toLowerCase()
    })
    console.log(pokeChoice)
    console.log(pokeChoice.name)
    document.querySelector("#pokeName").textContent = `${pokeChoice.name}`
    
    document.querySelector("#type").textContent= `  ${pokeChoice.type}`
    document.querySelector("#evolution").textContent= `  ${pokeChoice.evolution}`
    document.querySelector("#pokedex").textContent= `  ${pokeChoice.pokedex}`
    document.querySelector('#pokeImage').setAttribute('src', `images/${pokeChoice.name}.jpg`)
    
}
