import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import Tos from './pages/tos';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/terms-of-services" component={Tos} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
};

export default App;
