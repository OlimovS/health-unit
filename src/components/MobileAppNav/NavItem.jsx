import React from "react";
import { Link } from "react-router-dom";

const IconWithUnderText = ({ icon, text, link }) => {
  return (
    <Link to={link}>
      <div className="icon__undertext">
        {icon}
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default IconWithUnderText;
