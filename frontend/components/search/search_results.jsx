import React from "react";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.searches);
    return (
      <div className="search-bar-wrapper">
          <h1 className="create-new-playlist-h1">Here are some results!</h1>
          <form className="new-playlist-form">
            <section className="new-playlist-form-input">
              hiiiiiii
            </section>
          </form>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    searches: state.entities.searches
});

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, null)(SearchResults);
