import React, { useEffect, useState, useContext } from "react";
import { Header, Input, Button } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const CountrySearch = () => {
  const state = useContext(AppContext);
  const { summaryData, handleCountrySearch } = state;
  const [countryNames, setCountryNames] = useState(null);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    if (!countryNames) {
      const slugNames = summaryData.Countries.map((i) => i.Slug);
      setCountryNames(slugNames);
    }
  }, [summaryData, countryNames]);

  return (
    countryNames && (
      <Header>
        <Input id="NoDrag" action placeholder="Country Search...">
          <input
            id="NoDrag"
            type="text"
            list="countries"
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <Button
            id="NoDrag"
            type="submit"
            onClick={() => handleCountrySearch(searchTerms)}
          >
            Search
          </Button>
        </Input>
        <datalist id="countries">
          {countryNames.map((i, k) => (
            <option key={k} value={`${i}`}>
              {i}
            </option>
          ))}
        </datalist>
      </Header>
    )
  );
};

export default CountrySearch;
