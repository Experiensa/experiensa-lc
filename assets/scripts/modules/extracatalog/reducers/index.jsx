import { combineReducers } from 'redux';
import catalogReducer from './catalog';

const rootReducer = combineReducers({
  catalog: catalogReducer,
});

export default rootReducer;
