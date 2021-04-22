//inital set of trees into a tree list
let treeList = ["Aspen", "Maple", "Oak", "Pine"]
const errorElement = document.querySelector("#errorDisplay")
const displayResults = document.querySelector("#treeDisplay")
//displayResults.textContent = "Testing 1, 2 3..."

//display list of trees inside the displayResults div

const listTrees = () => {
    let list = ''
    treeList.forEach(tree => {
        list += `${tree} <br> <br>`
    })
    displayResults.innerHTML = `${list} <span> ${treeList.length} elements long </span>`

}
listTrees()

//add a redwood to the end of the display
var addTreeStart = () => {
    treeList.push('Redwood')
    listTrees()
}
var redwood = document.getElementById('add_redwood')
redwood.onclick = addTreeStart

//add a pear tree to the start of a display
document.querySelector('#add_pear').onclick = () => {
    treeList.unshift("Pear")
    listTrees()
}

//remove first tree
document.querySelector('#remove_tree1').onclick = () => {
    if (treeList.length > 0) {
        treeList.shift()
        listTrees()
    }
    else {
        //give error message
        errorElement.textContent = "There are no tree left. Way to go capitalist"
    }
}
//remove second tree
document.querySelector('#remove_tree2').onclick = () => {
    if (treeList.length > 0) {
        treeList.splice(1,1)
        listTrees()
    }
    else {
        //give error message
        errorElement.textContent = "There are no tree left. Way to go capitalist"
    }
}
//remove last tree
document.querySelector('#remove_treeLast').onclick = () => {
    if (treeList.length > 0) {
        treeList.pop()
        listTrees()
    }
    else {
        //give error message
        errorElement.textContent = "There are no tree left. Way to go capitalist"
    }
}
//sort the tree list alphabetically
document.querySelector('#sortTrees').onclick = () => {
    treeList.sort()
    listTrees()
}
//make tree names lowercase
//call a function that does it for you:
document.querySelector('#lowerTrees').onclick = () => {
    let list = ''
    treeList.forEach(tree =>{
        list += `${tree.toLowerCase()} <br> <br>`
    })
    displayResults.innerHTML = `${list} <span> ${treeList.length} elements long </span>`
}

//Display item 3
document.querySelector('#showName3').onclick = () =>{
if (treeList.length>2){
errorElement.textContent = treeList[2]}
else{
    errorElement.textContent = "There are not enough trees to count to three. Way to go capitalist"
}
}
//Display item 4
document.querySelector('#showName4').onclick = () =>{
    if (treeList.length>3){
    errorElement.textContent = treeList[3]}
    else{
        errorElement.textContent = "There are not enough trees to count to four. Way to go capitalist"
    }
    }