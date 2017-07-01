import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import App from './container/App';
import ProgressBar from './components/ProgressBar';
import configureMockStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/index';
import dataReducer from './reducers/reducer_all_data';
import { fetchAllData } from './actions/index';
import { FETCH_ALL_DATA } from './actions';
import nock from 'nock';


const middlewares = [ReduxPromise];
const mockStore = configureMockStore(middlewares);

describe('(Component) App.js ', () => {
    it('renders without crashing', () => {

        const store = mockStore({ rootReducer });
        const wrapper = shallow(
            <App store={store} />
        );
        expect(wrapper.length).toEqual(1);
    })

})

describe('(Component) ProgressBar.js', () => { 
    it('renders without exploding with default props', () => {
        const props = {initialValue: 50,activeBar: 2,order: 1}
        const wrapper = shallow(
            <ProgressBar {...props}/>
        ); 
        expect(wrapper.length).toEqual(1); 
    });
 });

describe('(Reducer) reducer_all_data.js', () => { 
    it('returns proper initial state', () => { 
        expect(dataReducer(undefined, {})).toEqual({}); 
     }); 
    it('returns same state for unknown action', () => { 
        expect(dataReducer( { bars: [39,26,-37,-49], buttons: [66,69,41] },  {type: 'UNKNOWN_ACTION' } )).toEqual( { bars: [39,26,-37,-49], buttons: [66,69,41] }); 
    }) 
});

describe('(Action) index.js', () => {
    afterEach(() => {
        nock.cleanAll()
    })
    it('should dispatch an action to fetch data', () => {
        nock('http://frontend-exercise.apps.staging.digital.gov.au/')
            .get('/bars')
            .reply(200);

        const store = mockStore({})

        return store.dispatch(fetchAllData()).then(() => {
            const actions = store.getActions()
            expect(actions[0].type).toEqual(FETCH_ALL_DATA)
        })
    })
})

