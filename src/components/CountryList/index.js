import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { Country } from "components/Country";

const CountryListStyled = styled.div`
  display: grid;
  row-gap: 2.3em;
  justify-content: center;
  background: var(--bg-primary-color);
  border: 1px solid red;
  padding: 4em 2em;
`;

export const CountryList = () => {
  const countryList = useSelector((state) => state.countryList);
  const dispatch = useDispatch();
  console.log(countryList);


  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
        console.log(list.length);
      })
      .catch(() => {
        console.log("Error con la Api");
      });
  }, []);

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
