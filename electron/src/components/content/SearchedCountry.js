import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import { Grid } from "semantic-ui-react";
import CounrtyItem from "../reusable/CountryItem";

const SearchedCountry = () => {
  const state = useContext(AppContext);
  const { summaryData, countrySearch } = state;
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (countrySearch) {
      const searchedCountry = summaryData.Countries.filter((obj) => {
        return obj.Slug === countrySearch;
      });
      setCountry(searchedCountry[0]);
    }
  }, [countrySearch, summaryData.Countries]);

  return country ? (
    <Grid centered style={{ padding: 15 }}>
      <Grid.Column>
        <CounrtyItem
          country={correctedNames(country.Country)}
          countryCode={country.CountryCode.toLowerCase()}
          totalConfirmed={addComma(country.TotalConfirmed)}
          totalRecovered={addComma(country.TotalRecovered)}
          totalDeaths={addComma(country.TotalDeaths)}
        />
      </Grid.Column>
    </Grid>
  ) : null;
};

const addComma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

export default SearchedCountry;
