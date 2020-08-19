import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {
    summaryData: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

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

  return (
    <AppContext.Provider
      value={{
        summaryData: state.summaryData,
        onDataSummary,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
