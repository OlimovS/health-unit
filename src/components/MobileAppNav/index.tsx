import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";

// styles
import "./styles.css";
import IconWithUnderText from "./IconWithUnderText";

const MobileAppNav = () => {
  return (
    <div>
      <h1>MobileAppNav</h1>
      <Link to="/">home</Link>
      <Link to="/articles">articles</Link>
      <Link to="/events">events</Link>
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
      <div>
        <nav className="mobile__app__nav">
          <ul>
            <li>
              <IconWithUnderText icon={<AiOutlineHome />} text="Home" />
            </li>
            <li>
              <IconWithUnderText icon={<MdOutlineArticle />} text="Maqolalar" />
            </li>
            <li>
              <IconWithUnderText icon={<AiOutlineHome />} text="Home" />
            </li>
            <li>
              <IconWithUnderText icon={<AiOutlineHome />} text="Home" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileAppNav;
