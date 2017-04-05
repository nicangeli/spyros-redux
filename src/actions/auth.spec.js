import configureStore from 'redux-mock-store';
import * as authActions from './auth';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';


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

it('should ? ', () => {
  const initialState = {};
  const store = mockStore(initialState);

  return store.dispatch(authActions.login())
  .then(() => {
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "LOGIN_REQUESTED" },
      { type: "LOGIN_SUCCESS", token: 'blah' }
    ]);
  })
})


