import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { Country } from "components/Country";

const CountryListStyled = styled.div`
  display: grid;
  row-gap: 2.3em;
  justify-content: center;
  padding: 4em 2em;
`;

export const CountryList = () => {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);


  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }
    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
      })
      .catch(() => {
        console.log("Error con la Api");
      });
  }, [dispatch]);

  return (
    <CountryListStyled>

      {countryList.map(
        ({ alpha3Code, flag, name, population, capital, region }) => {
          return (
            <Country
              key={alpha3Code}
              flag={flag}
              name={name}
              population={population}
              capital={capital}
              region={region}
            />
          );
        }
      )}
    </CountryListStyled>
  );
};
