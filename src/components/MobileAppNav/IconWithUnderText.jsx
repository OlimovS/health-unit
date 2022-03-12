import React from "react";

const IconWithUnderText = ({ icon, text }) => {
  return (
    <div>
      <div className="icon__undertext">
        {icon}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default IconWithUnderText;
