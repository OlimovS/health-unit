import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MobileAppNav from "./components/MobileAppNav";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import MakeEvent from "./pages/Make/MakeEvent";
import MakePost from "./pages/Make/MakePost";
import KlinakaWebsite from "./pages/Kliniks";
import LoginPage from "./pages/Login";
import OneKlinikPage from "./pages/OneKlinikPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/Register";
import MakeArticle from "./pages/Make/MakeArticle";

// interface IProfile {
//   isLoggedIn: boolean;
//   role: "user" | "clinic" | "";
//   data: {
//     email: string;
//     name: string;
//   };
// }

type IProfile =
  | {
      isLoggedIn: true;
      role: "user" | "clinic";
      data: {
        email: string;
        name: string;
      };
    }
  | {
      isLoggedIn: false;
      role: "";
      data: null;
    };
function App() {
  const [profile, setProfile] = useState<IProfile>({
    isLoggedIn: false,
    role: "",
    data: null,
  });
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
        <Route path="/make-post">
          <MakePost />
        </Route>
        <Route path="/make-event">
          <MakeEvent />
        </Route>
        <Route path="/make-article">
          <MakeArticle />
        </Route>
      </Switch>
      <MobileAppNav />
    </div>
  );
}

export default App;
