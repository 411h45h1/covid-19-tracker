import React from "react";
import "./App.css";

import AppState from "./context/AppState";
import { Scrollbars } from "react-custom-scrollbars";
import CovidDataSearch from "./components/CovidDataSearch.js";
import { Header } from "semantic-ui-react";
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
          <div
            style={{
              margin: "0px 10px 0px 10px",
            }}
          >
            <Header as="h4" textAlign="center">
              <a
                id="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AhmedAlihashi/covid-19-tracker"
              >
                Ahmed's Global Covid-19 Tracker
              </a>
            </Header>
          </div>
        </div>
      </Scrollbars>
    </AppState>
  );
};

export default App;
