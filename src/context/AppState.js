import React, { useReducer, useEffect } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {
    summaryData: null,
    showGlobalList: false,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { summaryData } = state;

  const onDataSummary = () => {
    fetch("https://api.covid19api.com/summary", {
      method: "GET",
      redirect: "follow",
    })
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_COVID19_COUNTRY_DATA", payload: res });
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (!summaryData) {
      onDataSummary();
    } else if (summaryData) {
      console.log("Global Data", summaryData);
    }
  }, [summaryData]);

  const onAllCountriesToggle = () => dispatch({ type: "TOGGLE_ALL_COUNTRIES" });

  return (
    <AppContext.Provider
      value={{
        summaryData: state.summaryData,
        showGlobalList: state.showGlobalList,
        onDataSummary,
        onAllCountriesToggle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
