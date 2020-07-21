import React from "react";
import styled from "styled-components";
import { Wrapper } from "components/wrapper.js";

const HeaderStyled = styled.header`
  background: var(--bg-elements-color);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    h1 {
      margin: 0;
      font-size: 14px;
    }

    .dark-mode {
      p {
        font-weight: 600;
        font-size: 12px;
      }
      .moon {
        margin-right: 10px;
        display: inline-flex;
        transform: rotate(-25deg);
      }
    }
  }
`;

export const Header = () => {
  function handleClick() {}

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Where int the world?</h1>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                <i className="far fa-moon"></i>
                {/* <i className="fas fa-moon"></i> */}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
};
