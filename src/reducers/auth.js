import * as types from '../actions/types'

const defaultState = {
    isLoggingIn: false,
    token: null
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case types.LOGIN_REQUESTED: 
            return { ...state, isLoggingIn: true }
        case types.LOGIN_SUCCESS: 
            return { ...state, isLoggingIn: false, token: action.token }
        default: 
            return state
    }
}