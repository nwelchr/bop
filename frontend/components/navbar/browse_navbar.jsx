import React from "react";
import { NavLink } from "react-router-dom";

class BrowseNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="top-nav-bar">
        <li className="top-nav-link-wrapper">
          <NavLink exact to="/browse" activeClassName="nav-link-selected">
            <span>Featured</span>
          </NavLink>
        </li>
        <li className="top-nav-link-wrapper">
          <NavLink exact to="/users" activeClassName="nav-link-selected">
            <span>Users</span>
          </NavLink>
        </li>
        {/* <li className="top-nav-link-wrapper">
          <NavLink exact to="#" activeClassName="nav-link-selected">
            <span>Genres & Moods</span>
          </NavLink>
        </li>
        <li className="top-nav-link-wrapper">
          <NavLink exact to="#" activeClassName="nav-link-selected">
            <span>New Releases</span>
          </NavLink>
        </li>
        <li className="top-nav-link-wrapper">
          <NavLink to="#" activeClassName="nav-link-selected">
            <span>Discover</span>
          </NavLink>
        </li> */}
      </nav>
    );
  }
}

export default BrowseNavbar;
