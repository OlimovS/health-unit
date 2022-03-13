import React from "react";
import KlinikaHomePage from "./Klinika";
import UserHomePage from "./User";

const Home = () => {
  return <div>{true ? <KlinikaHomePage /> : <UserHomePage />}</div>;
};

export default Home;
