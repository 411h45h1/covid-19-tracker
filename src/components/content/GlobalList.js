import React, { useContext, useState } from "react";
import AppContext from "../../context/appContext";
import { Grid, Label, Button } from "semantic-ui-react";
import CounrtyItem from "../reusable/CountryItem";
import { Media } from "../../config/media";

const GlobalList = () => {
  const state = useContext(AppContext);
  const { summaryData } = state;
  const [countriesSwitch, setCountriesSwitch] = useState("a");

  const countries = summaryData.Countries;

  const RenderedCountries = () => {
    switch (countriesSwitch) {
      case "ascendingConfirmedCases":
        return countries
          .sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed ? 1 : -1))
          .map((i, k) => {
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
      case "descendingConfirmedCases":
        return countries
          .sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? 1 : -1))
          .map((i, k) => {
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
      case "ascendingRecoveredCases":
        return countries
          .sort((a, b) => (a.TotalRecovered < b.TotalRecovered ? 1 : -1))
          .map((i, k) => {
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
      case "descendingRecoveredCases":
        return countries
          .sort((a, b) => (a.TotalRecovered > b.TotalRecovered ? 1 : -1))
          .map((i, k) => {
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
      case "ascendingDeathsCases":
        return countries
          .sort((a, b) => (a.TotalDeaths < b.TotalDeaths ? 1 : -1))
          .map((i, k) => {
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
      case "descendingDeathsCases":
        return countries
          .sort((a, b) => (a.TotalDeaths > b.TotalDeaths ? 1 : -1))
          .map((i, k) => {
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
      default:
        return countries.map((i, k) => {
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
    }
  };

  const reorderConfirmedCases = () =>
    countriesSwitch !== "ascendingConfirmedCases"
      ? setCountriesSwitch("ascendingConfirmedCases")
      : countriesSwitch === "ascendingConfirmedCases"
      ? setCountriesSwitch("descendingConfirmedCases")
      : countriesSwitch === "descendingConfirmedCases"
      ? setCountriesSwitch("ascendingConfirmedCases")
      : null;

  const reorderRecoveredCases = () =>
    countriesSwitch !== "ascendingRecoveredCases"
      ? setCountriesSwitch("ascendingRecoveredCases")
      : countriesSwitch === "ascendingRecoveredCases"
      ? setCountriesSwitch("descendingRecoveredCases")
      : countriesSwitch === "descendingRecoveredCases"
      ? setCountriesSwitch("ascendingRecoveredCases")
      : null;

  const reorderDeathsCases = () =>
    countriesSwitch !== "ascendingDeathsCases"
      ? setCountriesSwitch("ascendingDeathsCases")
      : countriesSwitch === "ascendingDeathsCases"
      ? setCountriesSwitch("descendingDeathsCases")
      : countriesSwitch === "descendingDeathsCases"
      ? setCountriesSwitch("ascendingDeathsCases")
      : null;

  return (
    <div>
      <Label color="black" attached="top left">
        <Button
          toggle
          active={countriesSwitch === "ascendingConfirmedCases" ? true : false}
          onClick={() => reorderConfirmedCases()}
          content="Toggle Confirmed Cases"
        />
        <Button
          toggle
          active={countriesSwitch === "ascendingRecoveredCases" ? true : false}
          onClick={() => reorderRecoveredCases()}
          content="Toggle Recovered"
        />
        <Button
          toggle
          active={countriesSwitch === "ascendingDeathsCases" ? true : false}
          onClick={() => reorderDeathsCases()}
          content="Toggle Casualties"
        />
      </Label>
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
    </div>
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
