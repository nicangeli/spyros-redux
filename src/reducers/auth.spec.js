import * as actions from '../actions/auth'
import authReducer from './auth';

it('LOGIN_REQUESTED action changes state to isLoggingIn to true',()=>{
  const nextState = authReducer({}, actions.loginRequested());
  expect(nextState).toEqual({isLoggingIn: true});
});

it('LOGIN_SUCCESS action changes state to isLoggingIn to false and token is returned',()=>{
  const nextState = authReducer({}, actions.loginSuccess('blah'));
  expect(nextState).toEqual({isLoggingIn: false, token: 'blah'});
});