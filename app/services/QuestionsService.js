import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaApi } from "./AxiosService.js";

class QuestionsService {
  answerQuestion(userAnswer) {
    const question = AppState.activeQuestion

    if (question.correctAnswer != userAnswer) {
      throw new Error(`${userAnswer} is incorrect`)
    }

    this.setActiveQuestion()
  }
  async getQuestions() {
    console.log('getting questions');

    const response = await triviaApi.get('?amount=10&type=multiple')
    console.log('📡 got questions', response.data);

    const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))

    AppState.questions = newQuestions

    this.setActiveQuestion()
  }


  setActiveQuestion() {
    const nextQuestion = AppState.questions.shift()

    if (!nextQuestion) {
      this.getQuestions()
      return
    }

    AppState.activeQuestion = nextQuestion
  }

}

export const questionsService = new QuestionsService()