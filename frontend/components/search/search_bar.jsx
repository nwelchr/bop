import React from "react";
// import { closePlaylistForm } from "../../actions/ui_actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchSearchResults } from '../../actions/search_actions';


const WAIT_INTERVAL = 500;
const ENTER_KEY = 13;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
      this.timer = null;
  }

  handleChange(e) {
    clearTimeout(this.timer);
    this.setState({ query: e.target.value });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  triggerChange() {
      const { query } = this.state;
      this.props.fetchSearchResults(query).then(results => query ? this.props.history.push(`/search/results/${query}`) : this.props.history.push(`/search`));
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
        e.preventDefault();
        this.triggerChange();
    }
  }

  render() {
    return (
        <main className="main-search-bar">
          <form className="search-form">
            <section className="search-form-input">
          <h1 className="search-heading">Search for an Artist, Song, Album, or Playlist</h1>
              <input
                className="search-input"
                value={this.state.query}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                placeholder="Start typing..."
                autoComplete="off"
              />
            </section>
          </form>
          </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch) => ({
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
