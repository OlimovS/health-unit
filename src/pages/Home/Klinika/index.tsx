import React, { ReactElement } from "react";

import { Switch, Route, Link } from "react-router-dom";
import { MdOutlinePostAdd } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";

import "./styles.css";
interface IOneMakeProps {
  className?: string;
  text: string;
  icon: ReactElement;
  link: string;
}

const OneMake = ({ className = "", text, icon, link }: IOneMakeProps) => {
  return (
    <Link to={link}>
      <div className={`make__card m-3 d-flex ${className}`}>
        <div>{icon}</div>
        <div className="flex-grow-1 pl-2 d-flex align-items-center">
          <p className="h5 mb-0">{text}</p>
        </div>
      </div>
    </Link>
  );
};

const KlinikaHomePage = () => {
  return (
    <div>
      <div className="make__wrapper d-sm-flex justify-content-center">
        <OneMake
          text="Post yozish"
          icon={<MdOutlinePostAdd size={25} color="green" />}
          link="/make-post"
        />
        <OneMake
          text="Meeting qo'shish"
          icon={<BsFillCalendarDateFill size={21} color="green" />}
          link="/make-event"
        />
        <OneMake
          text="Maqola joylash"
          icon={<AiFillFileAdd size={25} color="green" />}
          link="/make-article"
        />
      </div>
    </div>
  );
};

export default KlinikaHomePage;
