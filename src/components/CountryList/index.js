import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { Country } from "components/Country";
import { Wrapper } from "components/wrapper.js";

const CountryListStyled = styled.div`
  display: grid;
  row-gap: 2.3em;
  grid-auto-flow: columns;
  column-gap: 66px;
  grid-template-columns: repeat(auto-fill, minmax(0, 270px));
  justify-content: center;
  padding: 3em 0;
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
    <Wrapper>
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
                alpha3Code={alpha3Code}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
};
