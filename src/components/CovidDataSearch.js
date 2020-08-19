import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { Header, Segment } from "semantic-ui-react";
import GlobalList from "./content/GlobalList";
import { Button } from "./reusable";

const CovidDataSearch = () => {
  const state = useContext(AppContext);
  const { summaryData, showGlobalList, onAllCountriesToggle } = state;

  const isDataLoaded = () => (summaryData ? false : true);
  const handleGlobalList = () => (showGlobalList ? <GlobalList /> : null);

  return (
    <div style={{ padding: 20 }}>
      <Segment
        color="brown"
        className="GlobalData"
        inverted
        loading={isDataLoaded()}
      >
        <Header style={{ fontSize: "5em", color: "black" }}>
          Gobal Covid-19 Statistics
        </Header>
        {summaryData && (
          <Segment style={{ backgroundColor: "#90BEC8" }}>
            <Button
              active={showGlobalList}
              onClick={() => onAllCountriesToggle()}
            >
              All Countries
            </Button>
            {handleGlobalList()}
          </Segment>
        )}
      </Segment>
    </div>
  );
};

export default CovidDataSearch;
