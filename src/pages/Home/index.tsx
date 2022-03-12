import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import "./stlyes.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="one__reja">
        <div className="m-1">
          <AiOutlineBell size={22} color="green" />
        </div>
        <div className="reja__content">
          <h4>Mash qilish</h4>
          <small>
            <i>har 3 soatda (9 dan 18 gacha)</i>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Home;
