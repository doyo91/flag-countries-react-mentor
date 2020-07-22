import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import slugify from "slugify";

const CountryStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  /* overflow: hidden; */
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover .details {
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--input-color);
    border-top: none;
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }

  .details {
    padding: 1.5em;
    transition: .3s border;
    /* evitamos movimiento */
    border: 1px solid transparent;
    border-top: none;
    background: var(--bg-elements-color);


    h2 {
      margin: 0;
      margin-bottom: 1rem;
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 0.9em;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Country = ({ flag, name, population, capital, region, alpha3Code }) => {
  const history = useHistory();
  
  function handleClick() {
    history.push(`/country/${slugify(alpha3Code)}`);
  }

  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag}  alt="flag" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
};
