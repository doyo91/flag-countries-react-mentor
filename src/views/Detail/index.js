import React, { useEffect, useState } from "react";
import styled from "styled-components";
import slugify from "slugify";

import { useSelector } from "react-redux";

import { CountryDetail } from "components/CountryDetail";
import { Wrapper } from "components/wrapper.js";


const DetailStyled = styled.div`
    .btn-back {
      background: var(--bg-elements-color);
      box-shadow: 0 0 5px rgba(0,0,0,.3);
      padding: .7em 2.2em;
      border-radius: 5px;
      border: none;
      color: var(--text-color);
      cursor: pointer;
      margin-top: 2em;

      i {
        margin-right: 5px;
      }
    }
    @media screen and (min-width: 1024px) {
    .btn-back {
      margin-top: 3em;
    }
  }
`;

export const Detail = ({ match, history }) => {

  let DBcountry = useSelector((state) =>
    state.countryList.find(
      (item) => item.alpha3Code === match.params.id
    )
  );
  const [country, setCountry] = useState(DBcountry);

  useEffect(() => {
    // Capitalize and replace "-" for fetch
    // const name = match.params.id
    //   .replace("-", " ")
    //   .trim()
    //   .toLowerCase()
    //   .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/name/${match.params.id.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setCountry(data[0]));
    }
  }, [country, match.params.id]);

  function handleClick() {
    history.goBack()
  }
  return (
    <DetailStyled>
      <Wrapper>
        <button className="btn-back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        <CountryDetail {...country} />
      </Wrapper>
    </DetailStyled>
  );
};
