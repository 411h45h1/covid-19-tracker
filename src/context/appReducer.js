export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_COVID19_COUNTRY_DATA":
      return {
        ...state,
        summaryData: payload,
      };

    default:
      return state;
  }
};
