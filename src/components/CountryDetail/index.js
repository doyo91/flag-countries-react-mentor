import React from "react";
import styled from "styled-components";
import { Wrapper } from "components/wrapper.js";

const CountryDetailStyled = styled.div`
  margin-top: 4em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .details {
    .grid {
      display: grid;
      row-gap: 1em;
      .details-secondary {
        .details-secondary__languages {
          span {
            margin-right: 5px;
            &::after {
              content: ", ";
            }
            &:last-child {
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
    .border-countries {
      margin-top: 2em;
      .border-countries__item {
        display: inline-flex;
        padding: 0.5em 2em;
        border-radius: 5px;
        margin-right: 15px;
        margin-bottom: 15px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        background: var(--bg-elements-color);
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 120px;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .border-countries {
      .border-countries__item {
        display: inline-flex;
      
      }
    }
  }
`;

export const CountryDetail = ({
  flag,
  nativeName,
  name,
  population,
  capital,
  region,
  subregion,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
  alpha3Code
}) => {
  return (
    <Wrapper>
      <CountryDetailStyled>
        <img src={flag} alt="flag" />
        <div className="details">
          <h2>{name}</h2>
          <div className="grid">
            <div className="details-primary">
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Sub Region:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital}
              </p>
            </div>
            <div className="details-secondary">
              <p>
                <strong>Top Level Domain:</strong> {topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {currencies.map((item) => item.name)}
              </p>
              <p className="details-secondary__languages">
                <strong>Languages: </strong>
                {languages.map((item) => (
                  <span key={item.iso639_1}>{item.name}</span>
                ))}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <strong>Borders Countries:</strong>
            <p>
              {borders.map((item) => (
                <span key={item} className="border-countries__item">
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </CountryDetailStyled>
    </Wrapper>
  );
};
