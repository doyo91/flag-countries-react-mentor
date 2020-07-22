import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import reducer from "redux/reducer";

import { Header } from "components/Header";
import { Home } from "views/Home";
import { Detail } from "views/Detail";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  const [darkMode, setDarkMode] = useState("");
  const [checked, setChecked] = useState("");
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router basename="/flag-countries-react-mentor">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/country/:id" component={Detail} />
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
