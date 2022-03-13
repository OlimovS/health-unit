import React from "react";
import { NavLink, withRouter } from "react-router-dom";

//@ts-ignore
const RegisterOrLoginPage = (props) => {
  return (
    <div>
      <div className="px-3  text-primary">
        <div className="p-2">
          <NavLink
            to={`${props.match.path}/posts`}
            activeClassName="text-decoration-underline"
          >
            Register
          </NavLink>
        </div>
        <div className="p-2">
          <NavLink
            to={`${props.match.path}/events`}
            activeClassName="text-decoration-underline"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegisterOrLoginPage);
