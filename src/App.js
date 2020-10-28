import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Auth from "./components/Auth";


import "./assets/plugins/nucleo/css/nucleo.css";
import "./assets/scss/argon-dashboard-react.scss";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props => <Auth {...props}/>}/>
          <Redirect from="/" to="/login"/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
