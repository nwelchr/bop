import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import loadingReducer from './loading_reducer';
import playbarReducer from './playbar_reducer';
import modalsReducer from './modals_reducer';
import dropdownsReducer from './dropdowns_reducer';
import tracklistReducer from './tracklist_reducer';

const uiReducer = combineReducers({
  playbar: playbarReducer,
  tracklist: tracklistReducer,
  loading: loadingReducer,
  modals: modalsReducer,
  dropdowns: dropdownsReducer,
});

export default uiReducer;
