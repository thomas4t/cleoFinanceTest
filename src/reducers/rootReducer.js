const initialState = {
  searchResults: null,
  selectedUsersRepos: null,
  fetchingUsersRepos: false,
};

const rootReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      newState.searchResults = action.val;
      return newState;
    case "SET_SELECTED_USERS_REPOS":
      newState.selectedUsersRepos = action.val;
      return newState;
    case "FETCHING_USERS_REPOS":
      newState.fetchingUsersRepos = action.val;
      return newState;
    default:
      return newState;
  }
};

export default rootReducer;
