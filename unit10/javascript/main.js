// create an async function to deploy at an unconventional time

async function getHotelData(){

    try {
        const response = await fetch('javascript/hotel.json')
        return await response.json() //return the JSON object 
    } catch (error) {
        console.error(error)}
}

let hotelData = {}

getHotelData().then(data=> hotelData = data)


var anchor = document.querySelectorAll('a')
anchor.forEach(title => {title.addEventListener('click', hotelInfo)});

//make click handlers
function hotelInfo(event){
    //find out what was clicked, match the name with JSON
    
    let hotelChoice= hotelData.hotels.find(hotel=>{
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)
//I'm thinking something like  onclick of marriot button, document.querySelector(#rooms).textContent(hotelData[0].rooms), etc.
    document.querySelector("#hotelName").textContent = `${hotelChoice.name}`
    document.querySelector("#address").textContent= `  ${hotelChoice.address}`
    document.querySelector("#rooms").textContent= `  ${hotelChoice.rooms}`
    document.querySelector("#gym").textContent= `  ${hotelChoice.gym}`
    document.querySelector("#type").textContent= `  ${hotelChoice.roomTypes}`
    document.querySelector('#roomImage').setAttribute('src', `images/${hotelChoice.picture}`)
}
