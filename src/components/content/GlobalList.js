import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import { Grid } from "semantic-ui-react";
import CounrtyItem from "../reusable/CountryItem";
import { Media } from "../../config/media";

const GlobalList = () => {
  const state = useContext(AppContext);
  const { summaryData } = state;

  let countries = summaryData.Countries;

  const RenderedCountries = () =>
    countries.map((i, k) => {
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
    });

  return (
    <>
      <Grid as={Media} at="mobile">
        <Grid.Row centered columns={1}>
          <RenderedCountries />
        </Grid.Row>
      </Grid>

      <Grid as={Media} at="tablet">
        <Grid.Row centered columns={2}>
          <RenderedCountries />
        </Grid.Row>
      </Grid>

      <Grid as={Media} at="computer">
        <Grid.Row centered columns={3}>
          <RenderedCountries />
        </Grid.Row>
      </Grid>
      <Grid as={Media} at="largeScreen">
        <Grid.Row centered columns={4}>
          <RenderedCountries />
        </Grid.Row>
      </Grid>

      <Grid as={Media} greaterThanOrEqual="widescreen">
        <Grid.Row centered columns={6}>
          <RenderedCountries />
        </Grid.Row>
      </Grid>
    </>
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

const addComma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default GlobalList;
