import React from "react";
import "./App.css";

import AppState from "./context/AppState";
import CovidDataSearch from "./components/CovidDataSearch.js";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1400,
    widescreen: 1920,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;

const App = () => {
  return (
    <AppState>
      <style>{mediaStyles}</style>

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
