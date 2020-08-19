import React from "react";
import "./App.css";

import AppState from "./context/AppState";
import { Scrollbars } from "react-custom-scrollbars";
import DataList from "./components/DataList.js";

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
          <DataList />
        </div>
      </Scrollbars>
    </AppState>
  );
};

export default App;
