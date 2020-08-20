export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_COVID19_COUNTRY_DATA":
      return {
        ...state,
        summaryData: payload,
      };

    case "TOGGLE_ALL_COUNTRIES":
      return {
        ...state,
        showGlobalList: !state.showGlobalList,
      };

    case "UPDATE_COUNTRY_SEARCH":
      return {
        ...state,
        showGlobalList: false,
        countrySearch: payload,
      };

    default:
      return state;
  }
};
