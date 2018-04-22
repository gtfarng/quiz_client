import { combineReducers } from 'redux';
import BearsReducer from './reducer_bears';

const rootReducer = combineReducers({
    bears: BearsReducer
});

export default rootReducer;
