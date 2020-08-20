import React from "react";
import "./App.css";

import AppState from "./context/AppState";
import CovidDataSearch from "./components/CovidDataSearch.js";
import { MediaContextProvider } from "./config/media";

const App = () => {
  console.log("window", "H:", window.innerHeight, "W:", window.innerWidth);
  return (
    <AppState>
      <MediaContextProvider>
        <div className="App">
          <CovidDataSearch />
        </div>
      </MediaContextProvider>
    </AppState>
  );
};

export default App;
