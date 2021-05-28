// import './App.css';
import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
      <BrowserRouter>      
        <CssBaseline />
        {/* <Header /> */}
          <Router />
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      </Switch>
    )
}

export default App;
