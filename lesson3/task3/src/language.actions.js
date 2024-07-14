export const CURRENT_LANGUAGE = 'CURRENT_LANGUAGE';

export const setLanguage = (language) => {
  return { type: CURRENT_LANGUAGE, payload: language };
};
