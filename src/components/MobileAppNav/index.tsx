import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// styles
import "./styles.css";
import NavItem from "./NavItem";

const MobileAppNav = () => {
  return (
    <div>
      <div>
        <nav className="mobile__app__nav">
          <ul>
            <li>
              <NavItem icon={<AiOutlineHome />} text="Home" link="/" />
            </li>
            <li>
              <NavItem icon={<MdOutlineArticle />} text="Blog" link="/blog" />
            </li>
            <li>
              <NavItem
                icon={<AiOutlineHome />}
                text="Klinikalar"
                link="/kliniks"
              />
            </li>
            <li>
              <NavItem icon={<FiUser />} text="Profile" link="/profile" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileAppNav;
