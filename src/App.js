import React from "react";
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
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/country/:id" component={Detail} />
        </Switch>
      </Router>


      
    </Provider>
  );
}

export default App;
