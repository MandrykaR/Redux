import { CURRENT__LANGUAGE } from './language.actions';

const initialState = {
  currentLanguage: 'en',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT__LANGUAGE: {
      return {
        ...state,
        currentLanguage: [action.payload],
      };
    }
    default:
      return state;
  }
};

export default languageReducer;
