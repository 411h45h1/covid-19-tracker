import React from "react";
import "./App.css";

import AppState from "./context/AppState";
import { Scrollbars } from "react-custom-scrollbars";
import CovidDataSearch from "./components/CovidDataSearch.js";

const App = () => {
  return (
    <AppState>
      <Scrollbars
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#C89A90",
        }}
      >
        <div className="App">
          <CovidDataSearch />
        </div>
      </Scrollbars>
    </AppState>
  );
};

export default App;
