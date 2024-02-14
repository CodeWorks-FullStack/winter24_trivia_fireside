export class Question {
  constructor (data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
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