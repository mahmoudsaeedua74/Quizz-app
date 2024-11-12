//import class allquestion to main page
import{allQuestions} from"./main.js"

export class Quiz {
    constructor(category, diificlut, nums) {
        this.categoryMenu = category;
        this.difficultyOptions = diificlut;
        this.questionsNumber = nums;
        this.score = 0
    }
    async getApi() {
        let respons = await fetch(`https://opentdb.com/api.php?amount=${this.questionsNumber}&category=${this.categoryMenu}&difficulty=${this.difficultyOptions}`
        )
        let finalRespons = await respons.json()
        return finalRespons.results
    }
    displayscor(){ 
        let carton=`<div id="tryAgainContainer" class="text-center bg-white text-blac  animate__animated animate__bounceIn shadow-lg p-4 rounded-3">
                <h1>${this.score==allQuestions.length?`🥳🥳congratulations your scor is ${this.score} of ${allQuestions.length}`: `Opps your scor is ${this.score} of ${allQuestions.length} ` }</h1>
                <button class="btn reload btn-danger">Try Again</button></div>`
        questionsContainer.innerHTML=carton
        let myBtn=document.querySelector("div .reload")
        console.log(myBtn)
        myBtn.addEventListener("click",()=>location.reload()  
    ) 
}

}
