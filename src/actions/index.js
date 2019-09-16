import { RESOLVE_ANSWER, SHOW_CATEGORY_EXPLANATION } from 'actions/types';

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
