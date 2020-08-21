import React, { useContext } from "react";
import { Flag, Label, Segment, Statistic } from "semantic-ui-react";
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
    <Segment inverted style={{ marginBottom: 10 }}>
      <Label size="big" attached="top">
        {country}
        {countryCode === "xk" || countryCode === "ss" ? null : (
          <Flag name={countryCode} style={{ marginLeft: 20 }} />
        )}
      </Label>
      <div style={{ height: "1vh" }} />
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
