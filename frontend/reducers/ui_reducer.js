import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import loadingReducer from './loading_reducer';

const uiReducer = combineReducers({
    loading: loadingReducer
});

export default uiReducer;