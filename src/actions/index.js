/**
 * Created by hina on 30/6/17.
 */
import axios from 'axios';

export const FETCH_ALL_DATA = 'fetch_all_data';

export function fetchAllData(){

    const url = "http://frontend-exercise.apps.staging.digital.gov.au/bars";
    const request = axios.get(url, {});
    return {
        type: FETCH_ALL_DATA,
        payload: request
    }

}
