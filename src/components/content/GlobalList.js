import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import { Grid } from "semantic-ui-react";
import CounrtyItem from "../reusable/CountryItem";

const GlobalList = () => {
  const state = useContext(AppContext);
  const { summaryData } = state;
  return (
    <Grid centered style={{ padding: 15 }}>
      <Grid.Row centered columns={4}>
        {summaryData.Countries.map((i, k) => {
          const addComma = (num) =>
            num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          return (
            <Grid.Column key={k}>
              <CounrtyItem
                country={correctedNames(i.Country)}
                countryCode={i.CountryCode.toLowerCase()}
                totalConfirmed={addComma(i.TotalConfirmed)}
                totalRecovered={addComma(i.TotalRecovered)}
                totalDeaths={addComma(i.TotalDeaths)}
              />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

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

export default GlobalList;
