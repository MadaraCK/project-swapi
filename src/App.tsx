import React from 'react';
import './App.css';
import HomeView from "./HomeModule/HomeView";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Page404 from "./ErrorModule/Page404";
import FormularzView from "./FormularzModule/FormularzView";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={"/"} component={HomeView}/>
              <Route exact path={"/formularz"} component={FormularzView}/>
              <Route exact path={"/error"} component={Page404}/>
              <Redirect to={"/error"}/>
          </Switch>
      </Router>
  );
}

export default App;
