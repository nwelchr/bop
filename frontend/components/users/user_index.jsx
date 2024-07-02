import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import UserIndexItem from './user_index_item';
import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { openPlaylistForm } from '../../actions/ui_actions';
import NewPlaylistModal from '../modals/new_playlist_modal';
import BrowseNavbar from '../navbar/browse_navbar';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    if (this.props.loading) {
      return <div />;
    } else {
      return (
        <main className="main" style={this.props.background}>
          <main className="index-page-wrapper">
            <BrowseNavbar />
            <main className="music-index">
              <div className="music-index-wrapper">
                <ul>
                  {this.props.users.map((user) => (
                    <UserIndexItem
                      key={user.id}
                      user={user}
                      renderButton={false}
                    />
                  ))}
                </ul>
              </div>
            </main>
          </main>
        </main>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users),
    loading: state.ui.loading.global,
    background: { backgroundColor: '#2e263b' },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    openPlaylistForm: () => dispatch(openPlaylistForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
