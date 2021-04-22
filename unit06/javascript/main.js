


//Function that tells the story 
function tellStory(){
//create a nounArray = querySelectr("#nouns")

var nouns = document.getElementById("nouns")
var lowerNouns = nouns.value.toLowerCase()
var nounList = lowerNouns.replaceAll('\n', ' ').split(" ")

var verbs = document.getElementById("verbs")
var lowerVerbs = verbs.value.toLowerCase()
var verbList = lowerVerbs.replaceAll('\n', ' ').split(" ")

var adjectives = document.getElementById("adjectives")
var lowerAdjectives = adjectives.value.toLowerCase()
var adjectiveList = lowerAdjectives.replaceAll('\n', ' ').split(" ")

console.log(nounList)
console.log(adjectiveList)
console.log(verbList)

//Now I have an array of nouns that I can use to create a story...?





const myStory = `Once upon a time there was an army of <span> ${adjectiveList[0]}</span><span> ${nounList[0]}</span> that would 
wage a war within their <span> ${nounList[1]}</span>`

storyPlace = document.querySelector("#story").innerHTML = myStory
}
