import React, { useContext, useEffect } from "react";
import AppContext from "../context/appContext";
import {
  Grid,
  Header,
  Flag,
  Label,
  Segment,
  Statistic,
} from "semantic-ui-react";

const correctedNames = (name) =>
  name === "Taiwan, Republic of China"
    ? "Taiwan"
    : name === "Taiwan, Republic of China"
    ? "Taiwan"
    : name === "Tanzania, United Republic of"
    ? "Tanzania"
    : name === "Iran, Islamic Republic of"
    ? "Iran"
    : name === "Holy See (Vatican City State)"
    ? "Vatican City"
    : name === "Brunei Darussalam"
    ? "Brunei"
    : name === "Venezuela (Bolivarian Republic)"
    ? "Venezuela"
    : name === "Viet Nam"
    ? "Vietnam"
    : name === "Macedonia, Republic of"
    ? "North Macedonia"
    : name;

const DataList = () => {
  const state = useContext(AppContext);
  const { summaryData, onDataSummary } = state;

  useEffect(() => {
    if (!summaryData) {
      onDataSummary();
    } else if (summaryData) {
      console.log("Global Data", summaryData);
    }
  }, [summaryData, onDataSummary]);

  const isDataLoaded = () => (summaryData ? false : true);
  return (
    <div style={{ padding: 20 }}>
      <Segment
        color="brown"
        className="GlobalData"
        inverted
        loading={isDataLoaded()}
      >
        <Header style={{ fontSize: "6em", color: "black" }}>
          Gobal Covid-19 Statistics
        </Header>
        {summaryData && (
          <Segment style={{ backgroundColor: "#90BEC8" }}>
            <Grid centered style={{ padding: 15 }}>
              <Grid.Row centered columns={5}>
                {summaryData.Countries.map((i, k) => {
                  const addComma = (num) =>
                    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                  return (
                    <Grid.Column key={k}>
                      <Segment inverted style={{ marginBottom: 10 }}>
                        <Label size="big" attached="top">
                          {correctedNames(i.Country)}
                          {i.CountryCode === "XK" ||
                          i.CountryCode === "SS" ? null : (
                            <Flag
                              name={i.CountryCode.toLowerCase()}
                              style={{ marginLeft: 20 }}
                            />
                          )}
                        </Label>
                        <div style={{ height: "1vh" }} />
                        <Segment>
                          <Statistic.Group size="small" horizontal>
                            <Statistic>
                              <Statistic.Value>
                                {addComma(i.TotalConfirmed)}
                              </Statistic.Value>
                              <Statistic.Label>Total Confirmed</Statistic.Label>
                            </Statistic>
                            <Statistic color="green">
                              <Statistic.Value>
                                {addComma(i.TotalRecovered)}
                              </Statistic.Value>
                              <Statistic.Label>Total Recovered</Statistic.Label>
                            </Statistic>
                            <Statistic color="red">
                              <Statistic.Value>
                                {addComma(i.TotalDeaths)}
                              </Statistic.Value>
                              <Statistic.Label>Total Deaths</Statistic.Label>
                            </Statistic>
                          </Statistic.Group>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            </Grid>
          </Segment>
        )}
      </Segment>
    </div>
  );
};

export default DataList;
