import React from "react";
import "./App.css";

import AppState from "./context/AppState";
import CovidDataSearch from "./components/CovidDataSearch.js";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <CovidDataSearch />

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <a
            id="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AhmedAlihashi/covid-19-tracker"
          >
            Click here for the repository
          </a>
        </div>
      </div>
    </AppState>
  );
};

export default App;
