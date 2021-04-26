// create an object with 4 questions, 4 answers, and a method to match them
const question = {
    stem: "What is updog?",
    option1: "Our Great Savior",
    option2: "Updog Is Not a ''What'', But a Who.",
    option3: "Nothing Much, What's Up With You?",
    option4: "None of The Above",

    correct: 3,
    display: () =>{
        document.querySelector("#stem").textContent= question.stem
        document.querySelector("#answer1").textContent = question.option1
        document.querySelector("#answer2").textContent = question.option2
        document.querySelector("#answer3").textContent = question.option3
        document.querySelector("#answer4").textContent = question.option4
    },
    checkAnswers: (userChoice) =>{
        //correct answer:
        if (userChoice === question.correct){
            document.querySelector(".feedback").textContent = "CORRECT!"
        }
        else if(userChoice === 1){
            document.querySelector(".feedback").innerHTML = `I'm sorry, this answer is not <span>${question.option1}</span>`
        }
        else if(userChoice === 2){
            document.querySelector(".feedback").innerHTML = `I'm sorry, this answer is not <span>${question.option2}</span>`
        }
        else if(userChoice === 4){
            document.querySelector(".feedback").innerHTML = `I'm sorry, this answer is not <span>${question.option4}</span>`
        }
    }
}

document.querySelector("#answer1").addEventListener('click', () => question.checkAnswers(1))
document.querySelector("#answer2").addEventListener('click', () => question.checkAnswers(2))
document.querySelector("#answer3").addEventListener('click', () => question.checkAnswers(3))
document.querySelector("#answer4").addEventListener('click', () => question.checkAnswers(4))

question.display()