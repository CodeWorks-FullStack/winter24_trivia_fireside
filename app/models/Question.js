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
      ${this.AnswerButtons}
    </div>
    `
  }

  get AllAnswers() {
    const randomIndex = Math.floor(Math.random() * (this.incorrectAnswers.length + 1))

    const answers = [...this.incorrectAnswers]

    answers.splice(randomIndex, 0, this.correctAnswer)

    return answers
  }

  get AnswerButtons() {
    let htmlString = ''

    this.AllAnswers.forEach(answer => {
      htmlString += `
      <div class="mb-3">
        <button onclick="app.QuestionsController.answerQuestion('${answer}')"  class="btn btn-success fs-1 w-75">${answer}</button>
      </div>
      `
    });

    return htmlString
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