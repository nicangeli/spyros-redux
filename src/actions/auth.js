import * as types from './types'
import api from '../api'

export const loginRequested = () => ({
    type: types.LOGIN_REQUESTED
})

export const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    token
})

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequested())
        return api.login(email, password)
            .then(token => {
                dispatch(loginSuccess(token))
            })
    }
}