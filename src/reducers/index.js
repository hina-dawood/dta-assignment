/**
 * Created by hina on 30/6/17.
 */
import { combineReducers } from 'redux';
import AllDataReducer from './reducer_all_data';

const rootReducer = combineReducers({
    allData: AllDataReducer
})

export default rootReducer;
