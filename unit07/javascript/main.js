


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
wage a war within their <span> ${nounList[1]}</span>. That is, until the <span> ${nounList[4]}</span> king decided to <span> ${verbList[0]}</span>
a <span> ${nounList[3]}</span> over all the <span> ${nounList[0]}</span>. Finally the <span> ${adjectiveList[1]}</span> army of <span> ${adjectiveList[2]}</span> <span> ${nounList[0]} </span>
united against the <span> ${nounList[4]}</span> and demand that he <span> ${verbList[2]}</span> his issues. Finally, the <span> ${nounList[2]}</span> lord
declared a treaty and now they all <span> ${verbList[1]}</span> in peace.`

storyPlace = document.querySelector("#story").innerHTML = myStory
}
