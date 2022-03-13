import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MobileAppNav from "./components/MobileAppNav";
import ArticlesPage from "./pages/Articles";
import Blog from "./pages/Blog";
import EventsPage from "./pages/Events";
import Home from "./pages/Home";
import KlinakaWebsite from "./pages/Kliniks";
import LoginPage from "./pages/Login";
import OneKlinikPage from "./pages/OneKlinikPage";
import ProfilePage from "./pages/ProfilePage";
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
        <Route path="/blog">
          <Blog />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
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
