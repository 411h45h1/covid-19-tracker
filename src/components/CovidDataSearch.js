import React, { useContext, useState } from "react";
import AppContext from "../context/appContext";
import { Header, Segment, Button } from "semantic-ui-react";
import GlobalList from "./content/GlobalList";
import CountrySearch from "./content/CountrySearch";
import SearchedCountry from "./content/SearchedCountry";

const CovidDataSearch = () => {
  const state = useContext(AppContext);
  const {
    summaryData,
    showGlobalList,
    onAllCountriesToggle,
    countrySearch,
  } = state;
  const [toggleAllCountries, setToggleAllCountries] = useState(false);

  const isDataLoaded = () => (summaryData ? false : true);

  const handleClick = () => {
    setToggleAllCountries((prevState) => !prevState);
    onAllCountriesToggle();
  };

  return (
    <div style={{ padding: "20px 20px 20px 20px " }}>
      <Segment
        color="brown"
        className="GlobalData"
        inverted
        loading={isDataLoaded()}
      >
        <Header style={{ fontSize: "3em" }}>Gobal Covid-19 Statistics</Header>
        {summaryData && (
          <>
            <CountrySearch />

            <Button
              toggle
              active={toggleAllCountries}
              onClick={() => handleClick()}
            >
              All Countries
            </Button>

            {!showGlobalList && countrySearch && (
              <Segment
                style={{
                  backgroundColor: "#90BEC8",
                  maxHeight: "60vh",
                  overflowY: "scroll",
                  padding: 20,
                }}
              >
                <SearchedCountry />
              </Segment>
            )}

            {showGlobalList ? (
              <Segment
                style={{
                  backgroundColor: "#90BEC8",
                  maxHeight: "60vh",
                  overflowY: "scroll",
                  padding: 20,
                }}
              >
                <GlobalList />
              </Segment>
            ) : null}
          </>
        )}
      </Segment>
    </div>
  );
};

export default CovidDataSearch;
