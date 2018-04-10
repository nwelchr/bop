import React from "react";
import { connect } from "react-redux";
import SearchBar from './search_bar';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <SearchBar />
            <SearchResults />
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
