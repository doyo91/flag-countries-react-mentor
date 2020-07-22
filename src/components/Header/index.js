import React from "react";
import styled from "styled-components";
import { Wrapper } from "components/wrapper.js";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  background: var(--bg-elements-color);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    .link {
      outline: none;
      text-decoration: none;
      color: var(--text-primary);
    }

    h1 {
      margin: 0;
      font-size: 14px;
    }

    .dark-mode {
      p {
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
        padding: 0.5em;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .moon {
        margin-right: 10px;
        display: inline-flex;
        transform: rotate(-25deg);
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    .content {
      h1 {
        font-size: 24px;
      }

      .dark-mode {
        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export const Header = ({ setDarkMode, darkMode }) => {
  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link className="link" to="/">
            <h1>Where int the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {darkMode ? (
                  <i className="fas fa-moon"></i>
                ) : (
                  <i className="far fa-moon"></i>
                )}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
};
