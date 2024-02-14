import { Question } from './models/Question.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**
   * @type {Question[]}
   */
  questions = []

  /**
   * @type {Question | null}
   */
  activeQuestion = null
}

export const AppState = createObservableProxy(new ObservableAppState())