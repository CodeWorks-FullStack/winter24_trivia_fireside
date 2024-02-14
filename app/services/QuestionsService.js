import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaApi } from "./AxiosService.js";

class QuestionsService {
  async getQuestions() {
    console.log('getting questions');

    const response = await triviaApi.get('?amount=10&type=multiple')
    console.log('📡 got questions', response.data);

    const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))

    AppState.questions = newQuestions

  }

}

export const questionsService = new QuestionsService()