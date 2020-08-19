import React from "react";
import { Flag, Label, Segment, Statistic } from "semantic-ui-react";

const CountryItem = ({
  country,
  countryCode,
  totalConfirmed,
  totalRecovered,
  totalDeaths,
}) => {
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
            <Statistic.Value>{totalConfirmed}</Statistic.Value>
            <Statistic.Label>Total Confirmed</Statistic.Label>
          </Statistic>
          <Statistic color="green">
            <Statistic.Value>{totalRecovered}</Statistic.Value>
            <Statistic.Label>Total Recovered</Statistic.Label>
          </Statistic>
          <Statistic color="red">
            <Statistic.Value>{totalDeaths}</Statistic.Value>
            <Statistic.Label>Total Deaths</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </Segment>
  );
};

export default CountryItem;
