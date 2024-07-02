import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userIndexStyle = {
      borderRadius: '50%',
    };

    return (
      <div className="media-wrapper">
        <div className="button-wrapper" />
        <Link className="music-index-item" to={`/users/${this.props.user.id}`}>
          <li className="item-wrapper">
            <div className="media">
              <img
                alt=""
                style={userIndexStyle}
                className="media__image"
                src={this.props.user.profile_picture}
              />
              <div className={`media__body`} style={userIndexStyle} />
              <div className="media-loaded" style={userIndexStyle} />
            </div>
            <p>{this.props.user.username}</p>
          </li>
        </Link>
      </div>
    );
  }
}

export default UserIndexItem;
