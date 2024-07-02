import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import SearchBar from "./search_bar"
import SearchResults from "./search_results"

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className="main" style={{ background: "transparent" }}>
                <div className="search-container">
                    <SearchBar />
                    <Route path="/search/results/" component={SearchResults} />
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
