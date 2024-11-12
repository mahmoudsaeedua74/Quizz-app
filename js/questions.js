import { allQuestions, quiz } from "./main.js"

export class Question {
    constructor(index) {
        this.index = index
        this.qusetion = allQuestions[index].question
        this.incorrect_answers = allQuestions[index].incorrect_answers
        this.correct_answer = allQuestions[index].correct_answer
        this.category = allQuestions[index].category
        this.allanwer = this.getAllAnswer()
        
        this.checkedFlag = false
    }
    getAllAnswer() {
        let allAnswer = [...this.incorrect_answers, this.correct_answer]
        allAnswer.sort()
        return allAnswer
    }
    display() {
        let carton = `
          <div class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn">
      <div class="w-100 d-flex justify-content-between"> 
       <span class="btn btn-category"> ${this.category} </span>
        <span class="fs-6 btn btn-questions">${this.index + 1} of ${allQuestions.length} Questions</span>
      </div>
      <h2 class="text-capitalize text-center">${this.qusetion}</h2>  
      <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
      ${this.allanwer.map((choice) => `<li>${choice}</li>`).join("")}
      </ul>
      <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score: ${quiz.score} </h2>        
    </div> 
        `;
        questionsContainer.innerHTML = carton
        let allLi = document.querySelectorAll(".question li")
        allLi.forEach((ele) => {
            ele.addEventListener("click", () => {
                this.checkClicke(ele)
            })
        })
    }
    checkClicke(ele) {
        //checedflag بترجع ل فلس تاني فا مبيخشش جوا ومبقدرش ادوس تاني خلاص 
        if (!this.checkedFlag) {
            this.checkedFlag = true
            if (this.correct_answer == ele.innerHTML) {
                ele.classList.add("correct")
                quiz.score++
            }
            else {
                ele.classList.add("wrong")
            }
            this.nextQuestion()
        }
    }
    nextQuestion() {
        this.index++
        if (this.index < allQuestions.length) {
            setTimeout(() => {
                let newQusetions = new Question(this.index)
                newQusetions.display()
            }, 1500)
        } else {
            setTimeout(() => {
                quiz.displayscor()
            }, 1000);
        }
    }
    restInputs(){
        categoryMenu.value   = "";
        difficultyOptions.value = "";
        questionsNumber.value ="" ;     
        }

}
