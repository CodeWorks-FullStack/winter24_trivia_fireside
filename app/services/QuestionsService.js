import { triviaApi } from "./AxiosService.js";

class QuestionsService {
  async getQuestions() {
    console.log('getting questions');

    const response = await triviaApi.get('?amount=10&type=multiple')
    console.log('📡 got questions', response.data);
  }

}

export const questionsService = new QuestionsService()