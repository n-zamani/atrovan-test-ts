import { combineReducers } from 'redux';
import { authentication } from "./authentication.reducer";
import { devices } from "./devices.reducer";

const rootReducer = combineReducers({
  authentication,
  devices,
});

export default rootReducer;
