import React, { useContext, useState } from "react";
import AppContext from "../context/appContext";
import { Header, Segment, Label, Button } from "semantic-ui-react";
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
    addComma,
  } = state;
  const [toggleAllCountries, setToggleAllCountries] = useState(false);
  const [toggleGlobalStats, setToggleGlobalStats] = useState(true);

  const isDataLoaded = () => (summaryData ? false : true);

  const handleClick = () => {
    setToggleAllCountries((prevState) => !prevState);
    onAllCountriesToggle();
  };

  return (
    <>
      <Media at="mobile">
        <div style={{ padding: 10 }}>
          <Segment id="Drag" color="brown" inverted loading={isDataLoaded()}>
            {summaryData && (
              <>
                {toggleGlobalStats ? (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="black"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`Latest 🌎 Stats: Confirmed Cases: ${addComma(
                      summaryData.Global.NewConfirmed
                    )} | Recovered Cases: ${addComma(
                      summaryData.Global.NewRecovered
                    )} | Reported Casualties: ${addComma(
                      summaryData.Global.NewDeaths
                    )}`}
                  </Label>
                ) : (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="red"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`🌎 Confirmed Cases: ${addComma(
                      summaryData.Global.TotalConfirmed
                    )} | 🌎 Recovered Cases: ${addComma(
                      summaryData.Global.TotalRecovered
                    )} | 🌎 Reported Casualties: ${addComma(
                      summaryData.Global.TotalDeaths
                    )}`}
                  </Label>
                )}

                <Label className="TimeLabel" color="black" attached="bottom">
                  {`Date of Reported Data: ${new Date(
                    Date.parse(summaryData.Date)
                  )}`}
                </Label>
              </>
            )}
            <Header as="h3" textAlign="right">
              <Button.Group id="NoDrag" floated="right">
                <Button
                  as={"a"}
                  href="https://github.com/AhmedAlihashi/covid-19-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  content="Click here for the repository"
                />
                <Button
                  icon="power off"
                  color="red"
                  onClick={() => {
                    window.close();
                  }}
                />
              </Button.Group>
            </Header>
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
                  style={{ marginBottom: toggleAllCountries ? 0 : 30 }}
                >
                  All Countries
                </Button>

                {!showGlobalList && countrySearch && (
                  <Segment
                    style={{
                      backgroundColor: "#90BEC8",
                    }}
                  >
                    <SearchedCountry />
                  </Segment>
                )}

                {showGlobalList ? (
                  <Segment
                    id="NoDrag"
                    style={{
                      marginBottom: 20,
                      backgroundColor: "#90BEC8",
                      maxHeight: "55vh",
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
          <Segment id="Drag" color="brown" inverted loading={isDataLoaded()}>
            {summaryData && (
              <>
                {toggleGlobalStats ? (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="black"
                    size="large"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`Latest 🌎 Stats: Confirmed Cases: ${addComma(
                      summaryData.Global.NewConfirmed
                    )} | Recovered Cases: ${addComma(
                      summaryData.Global.NewRecovered
                    )} | Reported Casualties: ${addComma(
                      summaryData.Global.NewDeaths
                    )}`}
                  </Label>
                ) : (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="red"
                    size="large"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`🌎
 Confirmed Cases: ${addComma(
   summaryData.Global.TotalConfirmed
 )} | 🌎 Recovered Cases: ${addComma(
                      summaryData.Global.TotalRecovered
                    )} | 🌎 Reported Casualties: ${addComma(
                      summaryData.Global.TotalDeaths
                    )}`}
                  </Label>
                )}

                <Label
                  className="TimeLabel"
                  color="black"
                  attached="bottom right"
                >
                  {`Date of Reported Data: ${new Date(
                    Date.parse(summaryData.Date)
                  )}`}
                </Label>
              </>
            )}
            <Header as="h3" textAlign="right">
              <Button.Group id="NoDrag" floated="right">
                <Button
                  as={"a"}
                  href="https://github.com/AhmedAlihashi/covid-19-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  content="Click here for the repository"
                />
                <Button
                  icon="power off"
                  color="red"
                  onClick={() => {
                    window.close();
                  }}
                />
              </Button.Group>
            </Header>
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
                    }}
                  >
                    <SearchedCountry />
                  </Segment>
                )}

                {showGlobalList ? (
                  <Segment
                    id="NoDrag"
                    style={{
                      marginBottom: 20,
                      backgroundColor: "#90BEC8",
                      maxHeight: "47vh",
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
      <Media at="computer">
        <div style={{ padding: 10 }}>
          <Segment
            id="Drag"
            color="brown"
            inverted
            loading={isDataLoaded()}
            style={{ paddingTop: 30 }}
          >
            {summaryData && (
              <>
                {toggleGlobalStats ? (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="black"
                    size="big"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`Latest 🌎 Stats: Confirmed Cases: ${addComma(
                      summaryData.Global.NewConfirmed
                    )} | Recovered Cases: ${addComma(
                      summaryData.Global.NewRecovered
                    )} | Reported Casualties: ${addComma(
                      summaryData.Global.NewDeaths
                    )}`}
                  </Label>
                ) : (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="red"
                    size="big"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`🌎
 Confirmed Cases: ${addComma(
   summaryData.Global.TotalConfirmed
 )} | 🌎 Recovered Cases: ${addComma(
                      summaryData.Global.TotalRecovered
                    )} | 🌎 Reported Casualties: ${addComma(
                      summaryData.Global.TotalDeaths
                    )}`}
                  </Label>
                )}

                <Label
                  className="TimeLabel"
                  color="black"
                  attached="bottom right"
                >
                  {`Date of Reported Data: ${new Date(
                    Date.parse(summaryData.Date)
                  )}`}
                </Label>
              </>
            )}
            <Header as="h3" textAlign="right">
              <Button.Group id="NoDrag" floated="right">
                <Button
                  as={"a"}
                  href="https://github.com/AhmedAlihashi/covid-19-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  content="Click here for the repository"
                />
                <Button
                  icon="power off"
                  color="red"
                  onClick={() => {
                    window.close();
                  }}
                />
              </Button.Group>
            </Header>
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
                    }}
                  >
                    <SearchedCountry />
                  </Segment>
                )}

                {showGlobalList ? (
                  <Segment
                    id="NoDrag"
                    style={{
                      marginBottom: 20,
                      backgroundColor: "#90BEC8",
                      maxHeight: "47vh",
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
      <Media greaterThan="computer">
        <div style={{ padding: 10 }}>
          <Segment
            id="Drag"
            style={{ paddingTop: 45 }}
            color="brown"
            inverted
            loading={isDataLoaded()}
          >
            {summaryData && (
              <>
                {toggleGlobalStats ? (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="black"
                    size="massive"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`Latest 🌎 Stats: Confirmed Cases: ${addComma(
                      summaryData.Global.NewConfirmed
                    )} | Recovered Cases: ${addComma(
                      summaryData.Global.NewRecovered
                    )} | Reported Casualties: ${addComma(
                      summaryData.Global.NewDeaths
                    )}`}
                  </Label>
                ) : (
                  <Label
                    id="NoDrag"
                    as="a"
                    color="red"
                    size="massive"
                    attached="top"
                    onClick={() => setToggleGlobalStats(!toggleGlobalStats)}
                  >
                    {`🌎
 Confirmed Cases: ${addComma(
   summaryData.Global.TotalConfirmed
 )} | 🌎 Recovered Cases: ${addComma(
                      summaryData.Global.TotalRecovered
                    )} | 🌎 Reported Casualties: ${addComma(
                      summaryData.Global.TotalDeaths
                    )}`}
                  </Label>
                )}

                <Label
                  className="TimeLabel"
                  color="black"
                  attached="bottom right"
                >
                  {`Date of Reported Data: ${new Date(
                    Date.parse(summaryData.Date)
                  )}`}
                </Label>
              </>
            )}
            <Header as="h3" textAlign="right">
              <Button.Group id="NoDrag" floated="right">
                <Button
                  as={"a"}
                  href="https://github.com/AhmedAlihashi/covid-19-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  content="Click here for the repository"
                />
                <Button
                  icon="power off"
                  color="red"
                  onClick={() => {
                    window.close();
                  }}
                />
              </Button.Group>
            </Header>
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
                    }}
                  >
                    <SearchedCountry />
                  </Segment>
                )}

                {showGlobalList ? (
                  <Segment
                    id="NoDrag"
                    style={{
                      marginBottom: 20,
                      backgroundColor: "#90BEC8",
                      height: "56vh",
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
