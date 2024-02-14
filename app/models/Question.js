export class Question {
  constructor (data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get GameHTMLTemplate() {
    return `
    <div class="col-12 text-center">
      <h1>${this.question}</h1>
      <h2>${this.category} ${this.difficulty}</h2>
      <div class="mb-3">
        <button class="btn btn-success fs-1 w-75">ANSWER 1</button>
      </div>
      <div class="mb-3">
        <button class="btn btn-success fs-1 w-75">ANSWER 1</button>
      </div>
      <div class="mb-3">
        <button class="btn btn-success fs-1 w-75">ANSWER 1</button>
      </div>
      <div class="mb-3">
        <button class="btn btn-success fs-1 w-75">ANSWER 1</button>
      </div>
    </div>
    `
  }
}

// let data = {
//   "type": "multiple",
//   "difficulty": "medium",
//   "category": "Entertainment: Video Games",
//   "question": "In which game does a character say, &quot;Sometimes, I dream about cheese&quot;?",
//   "correct_answer": "Half Life 2",
//   "incorrect_answers": [
//     "Team Fortress 2",
//     "Dark Souls",
//     "Serious Sam: The Second Encounter"
//   ]
// }