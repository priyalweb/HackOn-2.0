// import './App.css';
import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'rgb(250,248,234)' }}>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App;
