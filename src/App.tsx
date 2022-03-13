import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import MobileAppNav from "./components/MobileAppNav";
import ArticlesPage from "./pages/Articles";
import EventsPage from "./pages/Events";
import Home from "./pages/Home";
import KlinakaWebsite from "./pages/Kliniks";
import LoginPage from "./pages/Login";
import OneKlinikPage from "./pages/OneKlinikPage";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/articles">
          <ArticlesPage />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/kliniks">
          <KlinakaWebsite />
        </Route>
        <Route exact path="/kliniks/:klinikId">
          <OneKlinikPage />
        </Route>
      </Switch>
      <MobileAppNav />
    </div>
  );
}

export default App;
