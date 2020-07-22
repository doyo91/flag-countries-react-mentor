import React from "react";
import styled from "styled-components";

const DetailStyled = styled.div`

`

export const Detail = ({match}) => {
  console.log(match);
  return (
    <DetailStyled>
      {match.params.id}
    </DetailStyled>
  );
};
