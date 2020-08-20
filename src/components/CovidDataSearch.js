import React, { useContext, useState } from "react";
import AppContext from "../context/appContext";
import { Header, Segment, Button } from "semantic-ui-react";
import GlobalList from "./content/GlobalList";
import CountrySearch from "./content/CountrySearch";
import SearchedCountry from "./content/SearchedCountry";
import { Media } from "../config/media";

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
    <>
      <Media at="mobile">
        <div style={{ padding: 10 }}>
          <Segment color="brown" inverted loading={isDataLoaded()}>
            <Header style={{ fontSize: "3em" }}>
              Global Covid-19 Statistics
            </Header>
            {summaryData && (
              <>
                <CountrySearch />

                <Button
                  id="allCountriesButton"
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
                    }}
                  >
                    <GlobalList />
                  </Segment>
                ) : null}
              </>
            )}
          </Segment>
        </div>
      </Media>
      <Media at="tablet">
        <div style={{ padding: 10 }}>
          <Segment color="brown" inverted loading={isDataLoaded()}>
            <Header style={{ fontSize: "5em" }}>
              Global Covid-19 Statistics
            </Header>
            {summaryData && (
              <>
                <CountrySearch />

                <Button
                  id="allCountriesButton"
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
                    }}
                  >
                    <SearchedCountry />
                  </Segment>
                )}

                {showGlobalList ? (
                  <Segment
                    style={{
                      backgroundColor: "#90BEC8",
                      maxHeight: "63vh",
                      overflowY: "scroll",
                    }}
                  >
                    <GlobalList />
                  </Segment>
                ) : null}
              </>
            )}
          </Segment>
        </div>
      </Media>
      <Media greaterThan="tablet">
        <div style={{ padding: 5 }}>
          <Segment color="brown" inverted loading={isDataLoaded()}>
            <Header style={{ fontSize: "6em" }}>
              Global Covid-19 Statistics
            </Header>
            {summaryData && (
              <>
                <CountrySearch />

                <Button
                  id="allCountriesButton"
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
                    }}
                  >
                    <SearchedCountry />
                  </Segment>
                )}

                {showGlobalList ? (
                  <Segment
                    style={{
                      backgroundColor: "#90BEC8",
                      height: "58vh",
                      overflowY: "scroll",
                    }}
                  >
                    <GlobalList />
                  </Segment>
                ) : null}
              </>
            )}
          </Segment>
        </div>
      </Media>
    </>
  );
};

export default CovidDataSearch;
