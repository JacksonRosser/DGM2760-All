

function getRandomNumberInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


function getRandomMonth(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
        default:
            name = "Not a month"
            break;
    }
    return name

}



function getDay(day) {
    let title
    switch (day) {
        case 1:
            title = "1st"
            break;
        case 2:
            title = "2nd"
            break;
        case 3:
            title = "3rd"
            break;
        case 4:
            title = "4th"
            break;
        case 5:
            title = "5th"
            break;
        case 6:
            title = "6th"
            break;
        case 7:
            title = "7th"
            break;
        case 8:
            title = "8th"
            break;
        case 9:
            title = "9th"
            break;
        case 10:
            title = "10th"
            break;
        case 11:
            title = "11th"
            break;
        case 12:
            title = "12th"
            break;
        case 13:
            title = "13th"
            break;
        case 14:
            title = "14th"
            break;
        case 15:
            title = "15th"
            break;
        case 16:
            title = "16th"
            break;
        case 17:
            title = "17th"
            break;
        case 18:
            title = "18th"
            break;
        case 19:
            title = "19th"
            break;
        case 20:
            title = "20th"
            break;
        case 21:
            title = "21st"
            break;
        case 22:
            title = "22nd"
            break;
        case 23:
            title = "23rd"
            break;
        case 24:
            title = "24th"
            break;
        case 25:
            title = "25th"
            break;
        case 26:
            title = "26th"
            break;
        case 27:
            title = "27th"
            break;
        case 28:
            title = "28th"
            break;
        case 29:
            title = "29th"
            break;
        case 30:
            title = "30th"
            break;
        default:
            title = "Not a real day"
            break;
    }
    return title
}


function getFortuneFate(fate) {
    let message
    switch (fate) {
        case 1:
            message = "gain treasure beyond measure!"
            break;
        case 2:
            message = "become absolved from your guilt"
            break;
        case 3:
            message = "find true love"
            break;
        case 4:
            message = "secure millions of worthless doubloons in a dead currency"
            break;
        case 5:
            message = "defeat your greatest foe"
            break;
        default:
            message = "not a real fortune"
            break;
    }
    return message
}


let month = getRandomNumberInclusive(1, 12)
let day = getRandomNumberInclusive(1, 30)
let fate = getRandomNumberInclusive(1, 5)

const monthName = getRandomMonth(month)
const dayName = getDay(day)
const fateMessage = getFortuneFate(fate)
const fortuneRevealed = `On the ${dayName} of ${monthName}, you will ${fateMessage}.`

console.log(monthName)
console.log(dayName)
console.log(fateMessage)

document.querySelector('#fortune').innerText = fortuneRevealed