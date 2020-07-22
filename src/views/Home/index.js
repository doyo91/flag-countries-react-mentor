import React from "react";

import { ActionList } from "components/ActionList";
import { CountryList } from "components/CountryList";

export const Home = () => {
  return (
    <>
      <ActionList />
      <CountryList />
    </>
  );
};
