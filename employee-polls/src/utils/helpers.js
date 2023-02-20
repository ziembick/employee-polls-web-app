export function getUnansweredQuestions(questions, authedUser) {
    return Object.values(questions)
      .filter((question) => !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))
      .sort((a, b) => b.timestamp - a.timestamp);
  }
  
  export function getAnsweredQuestions(questions, authedUser) {
    return Object.values(questions)
      .filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
      .sort((a, b) => b.timestamp - a.timestamp);
  }