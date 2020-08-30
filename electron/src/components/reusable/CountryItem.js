import React, { useContext } from "react";
import { Header, Label, Segment, Statistic } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const CountryItem = ({
  country,
  countryCode,
  totalConfirmed,
  totalRecovered,
  totalDeaths,
}) => {
  const state = useContext(AppContext);
  const { addComma } = state;
  const percent = (value, total) => (value / total) * 100;

  const casesLeadingToRecoveries = percent(
    totalRecovered,
    totalConfirmed
  ).toFixed(2);

  const casesLeadingToDeath = percent(totalDeaths, totalConfirmed).toFixed(2);

  return (
    <Segment inverted style={{ marginBottom: 15 }}>
      <Label size="big" attached="top">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{}}>
            <p style={{ fontSize: 20, color: "black" }}>{country}</p>
          </div>

          <div style={{}}>
            {
              <img
                src={`https://www.countryflags.io/${countryCode}/shiny/32.png`}
              />
            }
          </div>
        </div>
      </Label>
      <div style={{ height: "3vh" }} />
      <Segment>
        <Statistic.Group size="small" horizontal>
          <Statistic>
            <Statistic.Value>{addComma(totalConfirmed)}</Statistic.Value>
            <Statistic.Label>Total Confirmed</Statistic.Label>
          </Statistic>
          <Statistic color="green">
            <Statistic.Value>{addComma(totalRecovered)}</Statistic.Value>
            <Statistic.Label>Total Recovered</Statistic.Label>
          </Statistic>
          <Statistic color="red">
            <Statistic.Value>{addComma(totalDeaths)}</Statistic.Value>
            <Statistic.Label>Total Deaths</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Label
          color="green"
          icon="heart"
          size="tiny"
          attached="top right"
          content={casesLeadingToRecoveries + "%"}
        />
        <Label
          color="red"
          size="tiny"
          attached="bottom right"
          content={casesLeadingToDeath + "%"}
        />
      </Segment>
    </Segment>
  );
};

export default CountryItem;
