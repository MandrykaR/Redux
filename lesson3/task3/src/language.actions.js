export const CURRENT__LANGUAGE = 'CURRENT__LANGUAGE';

export const setLanguage = (language) => {
  return { type: CURRENT__LANGUAGE, payload: language };
};
