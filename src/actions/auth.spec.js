import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import * as authActions from './auth';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import reactTestUtils from 'react-addons-test-utils';
import App from '../App';
import REALstore from '../store/configureStore';

const flushToilet = () => new Promise(resolve=> setImmediate(resolve));

const api = {
  login: () => Promise.resolve('blah')
}

const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

it('LOGIN_REQUESTED should return object with type of LOGIN_REQUESTED', ()=>{
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(authActions.loginRequested());

  const actions = store.getActions();
  const expectedPayload = { type: "LOGIN_REQUESTED" };
  expect(actions).toEqual([expectedPayload]);
});

it('should trigger loginRequested and loginSuccess when login is run', ()=>{
  const initialState = { auth: { token: null }};
  const store = mockStore(initialState);

  const wrapper = mount(<Provider store={REALstore}><App /></Provider>);
  const click = wrapper.find('button').simulate('click');
  return flushToilet().then(()=>{
    console.log('no poo');
    expect(wrapper.find('h2').text()).toEqual('token: blah');
  });


  // return store.dispatch(authActions.login())
  //   .then(() => {
  //     const actions = store.getActions();
  //     expect(actions).toEqual([
  //       { type: "LOGIN_REQUESTED" },
  //       { type: "LOGIN_SUCCESS", token: 'blah' }
  //     ]);
  //   })
});
