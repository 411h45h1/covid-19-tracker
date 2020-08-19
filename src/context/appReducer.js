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

    default:
      return state;
  }
};
