import {
  RESOLVE_ANSWER,
  SHOW_CATEGORY_EXPLANATION,
  QUESTION_PREPARATION
} from 'actions/types';

export const resolveAnswer = AnswerObject => {
  return {
    type: RESOLVE_ANSWER,
    payload: AnswerObject
  };
};

export const changeCategoryDescription = category => {
  return {
    type: SHOW_CATEGORY_EXPLANATION,
    payload: category
  };
};

export const randomizeQuestionArray = QuestionsArray => {
  let PreparedArray = [];

  while (QuestionsArray.length !== 0) {
    let randomIndex = Math.floor(Math.random() * QuestionsArray.length);
    PreparedArray.push(QuestionsArray[randomIndex]);
    QuestionsArray.splice(randomIndex, 1);
  }

  return {
    type: QUESTION_PREPARATION,
    payload: PreparedArray
  };
};
