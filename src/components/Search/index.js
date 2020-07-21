import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { Input } from "components/Input";

const SearchStyled = styled.div`
  display: flex;
  position: relative;

  .btn-close {
    position: absolute;
    right: 1em;
    top: 0.25em;
    border: none;
    border-radius: 50%;
    padding: 0.8em 1em;
    cursor: pointer;
    color: var(--input-color);
  }
`;

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value,
    });
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };
  return (
    <SearchStyled>
      <Input value={inputValue} onChange={filterByName} />
      {inputValue && (
        <i className="fas fa-times btn-close" onClick={clearInput}></i>
      )}
    </SearchStyled>
  );
};
