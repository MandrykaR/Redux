export const SORT_USERS = 'SORT_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const sortUsers = (sortBy, sortOrder) => ({
  type: SORT_USERS,
  payload: { sortBy, sortOrder },
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
