import {
  QUESTION_PREPARATION,
  RESOLVE_ANSWER,
  SHOW_CATEGORY_EXPLANATION
} from 'actions/types';

const initialState = {
  CategorySelected: null,
  Questions: []
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case RESOLVE_ANSWER: {
      return {
        Questions: state.Questions.map(question => {
          if (action.payload.id === question.id) {
            return action.payload;
          }
          return question;
        })
      };
    }
    case SHOW_CATEGORY_EXPLANATION: {
      return {
        ...state,
        CategorySelected: action.payload
      };
    }
    case QUESTION_PREPARATION: {
      return {
        ...state,
        Questions: action.payload
      };
    }
    default:
      return state;
  }
}

export default mainReducer;
