/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bop.jsx":
/*!*****************!*\
  !*** ./bop.jsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./components/root.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./store/store.js");




document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  const root = document.getElementById('root');
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store
  }), root);
});

/***/ }),

/***/ "./components/app.jsx":
/*!****************************!*\
  !*** ./components/app.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _session_new_session_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session/new_session_container */ "./components/session/new_session_container.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/session_actions */ "./actions/session_actions.js");
/* harmony import */ var _session_login_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session/login_form_container */ "./components/session/login_form_container.js");
/* harmony import */ var _session_signup_form_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/signup_form_container */ "./components/session/signup_form_container.js");
/* harmony import */ var _main_page_main_page_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main_page/main_page_container */ "./components/main_page/main_page_container.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/route_util */ "./util/route_util.jsx");








const App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.AutoRedirectRoute, {
  exact: true,
  path: "/",
  component: _session_new_session_container__WEBPACK_IMPORTED_MODULE_1__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.AuthRoute, {
  path: "/login",
  component: _session_login_form_container__WEBPACK_IMPORTED_MODULE_3__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.AuthRoute, {
  path: "/signup",
  component: _session_signup_form_container__WEBPACK_IMPORTED_MODULE_4__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.ProtectedRoute, {
  path: "/browse",
  component: _main_page_main_page_container__WEBPACK_IMPORTED_MODULE_5__["default"]
})));
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/root.jsx":
/*!*****************************!*\
  !*** ./components/root.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./components/app.jsx");
// frontend/components/root.jsx




const Root = _ref => {
  let store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./util/route_util.jsx":
/*!*****************************!*\
  !*** ./util/route_util.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoute: function() { return /* binding */ AuthRoute; },
/* harmony export */   AutoRedirectRoute: function() { return /* binding */ AutoRedirectRoute; },
/* harmony export */   ProtectedRoute: function() { return /* binding */ ProtectedRoute; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");



const Auth = _ref => {
  let Component = _ref.component,
    path = _ref.path,
    loggedIn = _ref.loggedIn,
    exact = _ref.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: props => !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: "/"
    })
  });
};
const Protected = _ref2 => {
  let Component = _ref2.component,
    path = _ref2.path,
    loggedIn = _ref2.loggedIn,
    exact = _ref2.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: props => loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: "/"
    })
  });
};
const AutoRedirect = _ref3 => {
  let Component = _ref3.component,
    path = _ref3.path,
    loggedIn = _ref3.loggedIn,
    exact = _ref3.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: props => loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: "/browse"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props)
  });
};
const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser && state.session.currentUser !== null)
  };
};
const AuthRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(Auth));
const ProtectedRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(Protected));
const AutoRedirectRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(AutoRedirect));

/***/ }),

/***/ "./actions/session_actions.js":
/*!************************************!*\
  !*** ./actions/session_actions.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEAR_SESSION_ERRORS: function() { return /* binding */ CLEAR_SESSION_ERRORS; },
/* harmony export */   RECEIVE_CURRENT_USER: function() { return /* binding */ RECEIVE_CURRENT_USER; },
/* harmony export */   RECEIVE_ERRORS: function() { return /* binding */ RECEIVE_ERRORS; },
/* harmony export */   clearSessionErrors: function() { return /* binding */ clearSessionErrors; },
/* harmony export */   login: function() { return /* binding */ login; },
/* harmony export */   logout: function() { return /* binding */ logout; },
/* harmony export */   signup: function() { return /* binding */ signup; }
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util/session_api_util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});
const signup = user => dispatch => Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util/session_api_util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user).then(receivedUser => dispatch(receiveCurrentUser(receivedUser)), err => dispatch(receiveErrors(err.responseJSON)));
const login = user => dispatch => Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util/session_api_util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user).then(receivedUser => dispatch(receiveCurrentUser(receivedUser)), err => dispatch(receiveErrors(err.responseJSON)));
const logout = () => dispatch => Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util/session_api_util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().then(receivedUser => {
  dispatch(receiveCurrentUser(null));
});

/***/ }),

/***/ "./components/main_page/main_page_container.js":
/*!*****************************************************!*\
  !*** ./components/main_page/main_page_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './main_page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/playlist_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const mapStateToProps = state => {
  return {
    state: state.entities,
    loading: state.ui.loading.global,
    playing: state.ui.playbar.playing,
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/playlist_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()),
  fetchPlaylist: playlistId => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/playlist_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(playlistId))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './main_page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

/***/ }),

/***/ "./components/session/login_form_container.js":
/*!****************************************************!*\
  !*** ./components/session/login_form_container.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './session_form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors),
  formType: 'Log In',
  navLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/signup"
  }, "Sign Up")),
  usernameInput: null,
  emailPlaceholder: 'Email address or username'
});
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user)),
  clearSessionErrors: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()),
  loginDemoUser: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    username: 'Demo User',
    email: 'demo@demo.com',
    password: 'password'
  }))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './session_form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

/***/ }),

/***/ "./components/session/new_session_container.js":
/*!*****************************************************!*\
  !*** ./components/session/new_session_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './new_session'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/audio_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




const mapStateToProps = _ref => {
  let session = _ref.session;
  return {
    currentUser: session.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()),
  login: user => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user)),
  loginDemoUser: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    username: 'Demo User',
    email: 'demo@demo.com',
    password: 'password'
  }))
  //   fetchSongThenPlay: (songId) => dispatch(fetchSongThenPlay(songId)),
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './new_session'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

/***/ }),

/***/ "./components/session/signup_form_container.js":
/*!*****************************************************!*\
  !*** ./components/session/signup_form_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './session_form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'Sign Up',
  navLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login"
  }, "Log In")),
  usernameInput: true,
  emailPlaceholder: 'Email address'
});
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user)),
  clearSessionErrors: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()),
  loginDemoUser: () => dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/session_actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    username: 'Demo User',
    email: 'demo@demo.com',
    password: 'password'
  }))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './session_form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../reducers/root_reducer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
if (true) {
  const _require = require('redux-logger'),
    logger = _require.logger;
  middlewares.push(logger);
}
const configureStore = function () {
  let preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../reducers/root_reducer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), preloadedState, (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(...middlewares));
};
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./bop.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map