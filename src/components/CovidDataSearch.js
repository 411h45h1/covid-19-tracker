import React, { useContext, useState } from "react";
import AppContext from "../context/appContext";
import { Header, Segment, Button } from "semantic-ui-react";
import GlobalList from "./content/GlobalList";

const CovidDataSearch = () => {
  const state = useContext(AppContext);
  const { summaryData, showGlobalList, onAllCountriesToggle } = state;
  const [toggleAll, setToggleAll] = useState(false);

  const isDataLoaded = () => (summaryData ? false : true);

  const handleGlobalList = () => (showGlobalList ? <GlobalList /> : null);

  const handleClick = () => {
    setToggleAll((prevState) => !prevState);
    onAllCountriesToggle();
  };

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
          <>
            <Button toggle active={toggleAll} onClick={() => handleClick()}>
              All Countries
            </Button>
            {showGlobalList ? (
              <Segment
                style={{
                  backgroundColor: "#90BEC8",
                  maxHeight: "70vh",
                  overflowY: "scroll",
                  padding: 20,
                }}
              >
                {handleGlobalList()}
              </Segment>
            ) : null}
          </>
        )}
      </Segment>
    </div>
  );
};

export default CovidDataSearch;
