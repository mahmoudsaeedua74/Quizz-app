`use strict`
import {Quiz} from "./quiz.js" ;
import {Question} from "./questions.js" ;


//selected element from html 

const categoryMenu = document.querySelector("#categoryMenu")
const difficultyOptions = document.querySelector("#difficultyOptions")
const questionsNumber = document.querySelector("#questionsNumber")
const startQuiz = document.querySelector("#startQuiz")
const quizQuestions = document.querySelector("#quizQuestions")
const questionsContainer = document.querySelector("#questionsContainer")

//export to use it in  quiz and question 

// I made a quiz and all questions global to use it in different positions.export let allQuestions;
export let allQuestions;
export let quiz;

startQuiz.addEventListener("click", async () => {
    const category = categoryMenu.value
    const diificlut = difficultyOptions.value
    const nums = questionsNumber.value

    quiz = new Quiz(category, diificlut, nums)
    allQuestions = await quiz.getApi()
    
    const myQuestion = new Question(0)
    myQuestion.display()
    quizQuestions.classList.replace("d-flex", "d-none")
    myQuestion.restInputs()
})


