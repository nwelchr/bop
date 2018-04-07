import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import loadingReducer from './loading_reducer';
import playbarReducer from './playbar_reducer';

const uiReducer = combineReducers({
    playbar: playbarReducer,
    loading: loadingReducer
});

export default uiReducer;