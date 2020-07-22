import React from "react";
import styled from "styled-components";
import { Search } from "components/Search";
import { Region as FilterByRegion } from "components/Region";
import { Wrapper } from "components/wrapper.js";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }

  @media screen and (min-width: 768px) {
    .grid {

      grid-template-columns: 480px 200px;
      justify-content:space-between
      
    }
  }
`;

export const ActionList = () => {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
};
