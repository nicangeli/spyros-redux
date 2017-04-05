import React from 'react';
import { Provider } from 'react-redux';

import axios from 'axios'
import moxios from 'moxios'
import App from './src/App';
import reactTestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme'

import store from './src/store/configureStore';


beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
})

afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
})

const flushToilet = () => new Promise(resolve => setImmediate(resolve));


it('should trigger loginRequested and loginSuccess when login is run', () => {
    moxios.stubRequest('https://qa1-api.lendinvestinternal.com/api/login', {
        status: 200,
        response: {
            token: 'blah'
        }
    })

    const wrapper = mount(<Provider store={store}><App /></Provider>);
    const click = wrapper.find('button').simulate('click');

    return flushToilet().then(() => {
        const state = store.getState()
        expect(state).toEqual({ auth: { isLoggingIn: false, token: 'blah' } })
        expect(wrapper.find('h2').text()).toEqual('token: blah');
    });
});