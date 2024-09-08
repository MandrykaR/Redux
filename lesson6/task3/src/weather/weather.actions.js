export const getWeatherData = () => async (dispatch) => {
  const response = await fetch(
    'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities'
  );

  const data = await response.json();
  dispatch({ type: 'FETCH_CITIES', payload: data });
};
