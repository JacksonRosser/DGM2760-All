

function getRandomNumberInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

//build a switch that calls a month from 1-12

//Pick random number from 1-12
let month = getRandomNumberInclusive(1, 12)
//use that number to call a certain switch; 1=jan, 2=feb, etc.
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
//build switch that generates a day
let day = getRandomNumberInclusive(1, 30)

function getDay(day) {
    let title
    switch (day) {
        case 1:
            let title = "1st"
            break;
        case 2:
            let title = "2nd"
            break;
        case 3:
            let title = "3rd"
            break;
        case 4:
            let title = "4th"
            break;
        case 5:
            let title = "5th"
            break;
        case 6:
            let title = "6th"
            break;
        case 7:
            let title = "7th"
            break;
        case 8:
            let title = "8th"
            break;
        case 9:
            let title = "9th"
            break;
        case 10:
            let title = "10th"
            break;
        case 11:
            let title = "11th"
            break;
        case 12:
            let title = "12th"
            break;
        case 13:
            let title = "13th"
            break;
        case 14:
            let title = "14th"
            break;
        case 15:
            let title = "15th"
            break;
        case 16:
            let title = "16th"
            break;
        case 17:
            let title = "17th"
            break;
        case 18:
            let title = "18th"
            break;
        case 19:
            let title = "19th"
            break;
        case 20:
            let title = "20th"
            break;
        case 21:
            let title = "21st"
            break;
        case 22:
            let title = "22nd"
            break;
        case 23:
            let title = "23rd"
            break;
        case 24:
            let title = "24th"
            break;
        case 25:
            let title = "25th"
            break;
        case 26:
            let title = "26th"
            break;
        case 27:
            let title = "27th"
            break;
        case 28:
            let title = "28th"
            break;
        case 29:
            let title = "29th"
            break;
        case 30:
            let title = "30th"
            break;
        default:
            let title = "Not a real day"
            break;
    }
    return title
}
//function to determine one of five messages/fates
let fate = getRandomNumberInclusive(1, 5)
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
            break;
    }
}
//call each function and parse the result into a message
const monthName = getRandomMonth(month)
const dayName = getDay(day)
const fateMessage = getFortuneFate(fate)
const fortuneRevealed = `On the ${dayName} of ${monthName}, you will ${fateMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed