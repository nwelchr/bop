import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.searches);
    return (
        <main className="index-page-wrapper">
          <nav className="top-nav-bar">
            <li className="top-nav-link-wrapper">
              <NavLink exact to="/browse" activeClassName="nav-link-selected">
                <span>Featured</span>
              </NavLink>
            </li>
            <li className="top-nav-link-wrapper">
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
            </li>
          </nav>

          <main className="music-index">
          <div className="music-index-wrapper">
            <ul>
              <li>hey</li>
              <li>hey</li>
            </ul>
            </div>
          </main>
        </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  searches: state.entities.searches
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(SearchResults);
