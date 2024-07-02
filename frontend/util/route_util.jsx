import React from "react"
import { connect } from "react-redux"
import { Route, Redirect, withRouter } from "react-router-dom"

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={(props) =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={(props) =>
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
)

const AutoRedirect = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={(props) =>
            loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
        }
    />
)

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(
            state.session.currentUser && state.session.currentUser !== null
        ),
    }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))

export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected)
)

export const AutoRedirectRoute = withRouter(
    connect(mapStateToProps, null)(AutoRedirect)
)
