import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link, NavLink, Route, Switch, withRouter } from "react-router-dom";

import "./styles.css";
import ArticlesPage from "../Articles";
import EventsPage from "../Events";

//@ts-ignore
function Blog(props) {
  return (
    <div>
      <div className="blog__header">
        <img
          src="/static/read-blog.jpg"
          className="header__image mb-3"
          alt="Blog header"
        />
        <h3 className="text-center h5 m-auto" style={{ maxWidth: 400 }}>
          Foydali postlar, maqolalar o'qing, meetinglarga qatnashing!
        </h3>
      </div>
      <div className="m-auto" style={{ maxWidth: 400 }}>
        <div className="d-flex justify-content-center overflow-auto px-3  text-primary">
          <div className="p-2">
            <NavLink
              to={`${props.match.path}/posts`}
              activeClassName="text-decoration-underline"
            >
              Postlar
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink
              to={`${props.match.path}/events`}
              activeClassName="text-decoration-underline"
            >
              Meetinglar
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink
              to={`${props.match.path}/events`}
              activeClassName="text-decoration-underline"
            >
              Maqolalar
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/blog/posts">
          <ArticlesPage />
        </Route>
        <Route path="/blog/events">
          <EventsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(Blog);
