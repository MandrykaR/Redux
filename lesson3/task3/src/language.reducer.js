import { CURRENT_LANGUAGE } from './language.actions';

const initialState = {
  language: 'en',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
