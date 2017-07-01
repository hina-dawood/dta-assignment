/**
 * Created by hina on 30/6/17.
 */
import { FETCH_ALL_DATA } from '../actions';

export default function(state={}, action){
    switch(action.type){
        case FETCH_ALL_DATA: {
            return action.payload.data;
        }
        default:
            return state;
    }
}
