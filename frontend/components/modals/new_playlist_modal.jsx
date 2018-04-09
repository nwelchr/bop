import React from "react";
import { closePlaylistForm } from "../../actions/ui_actions";
import { connect } from "react-redux";

class NewPlaylistModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isModalOpen) {
      return null;
    }

    return (
      <div className="new-playlist-page">
        <div className="new-playlist-wrapper">
        <button onClick={this.props.closePlaylistForm}>Close me hereeee</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    // debugger;
  return {
    isModalOpen: state.ui.modals.newPlaylistModal.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closePlaylistForm: () => dispatch(closePlaylistForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistModal);
