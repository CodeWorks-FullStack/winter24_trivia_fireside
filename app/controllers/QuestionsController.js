import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuestion() {
  setHTML('activeQuestion', AppState.activeQuestion.GameHTMLTemplate)
}


export class QuestionsController {
  constructor () {
    this.getQuestions()

    AppState.on('activeQuestion', _drawQuestion)
  }
  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  answerQuestion(userAnswer) {
    try {
      console.log(userAnswer);
      questionsService.answerQuestion(userAnswer)
      Pop.success('Correct!')
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}