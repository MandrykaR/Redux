export const FETCH_CITIES = 'FETCH_CITIES';

const initialData = {
  cities: [],
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_CITIES: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
