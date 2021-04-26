//Duplicate menu, using selectALL and forEach

function duplicateMenu(){
//get all the anchor elements from the top menu
let topList = document.querySelectorAll("ul#primaryNavigation li a")
// this variable is a node list, which is essentaily an array but not quite. Anyways, how are you doing this sunday night
//create new list items for the bottom of the page
let newList = document.createElement('ul')
//selecting the new menu and adding the ul
let newNav = document.querySelector("#smallNavArea")
newNav.appendChild(newList)

topList.forEach(menuItem => {
    let newLI=document.createElement("li")
    let newA = document.createElement('a')
    // make the anchors matcht the links in the topList
    newA.setAttribute('href', menuItem.getAttribute('href'))
    //make the text of the anchors match the text in the toplist
    newA.textContent = menuItem.textContent
    //append an a for every li
    newLI.appendChild(newA)
    //append each menu item to the small nav area
    newList.appendChild(newLI)
})}

//calling the function
duplicateMenu()