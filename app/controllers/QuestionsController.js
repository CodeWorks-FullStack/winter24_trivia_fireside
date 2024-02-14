import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";




export class QuestionsController {
  constructor () {
    this.getQuestions()
  }
  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}