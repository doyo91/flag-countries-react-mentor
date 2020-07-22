import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background: var(--bg-elements-color);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  width: 100%;

  i {
    color: var(--input-color);
    margin-right: 1em;
  }
  input {
    flex: 1;
    height: 48px;
    border: none;
    line-height: 48px;
    font-size: 0.7em;
    outline: 0;
    background: var(--bg-elements-color);
    color: var(--text-primary);

    &::-moz-placeholder,
    &::-webkit-input-placeholder {
      color: var(--input-color);
    }
  }
`;

export const Input = ({ ...props }) => {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>

      <input placeholder="Search for a country..." type="text" {...props} />
    </InputStyled>
  );
};
