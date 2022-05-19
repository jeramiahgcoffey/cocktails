import {
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    TOGGLE_LOGIN_MODAL,
    TOGGLE_DARK_MODE,
    SET_SELECTED_INDEX,
} from './actions'

import { initalState } from './appContext'

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        case SET_SELECTED_INDEX:
            return {
                ...state,
                selectedIndex: action.payload.index,
            }
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertText: '',
                alertType: '',
            }
        case REGISTER_USER_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                showAlert: true,
                alertType: 'success',
                alertText: 'Registration successful!',
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                alertText: action.payload.msg,
                alertType: 'error',
                showAlert: true,
            }
        case LOGIN_USER_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                showAlert: true,
                alertType: 'success',
                alertText: 'Login successful!',
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                alertText: action.payload.msg,
                alertType: 'error',
                showAlert: true,
            }
        case LOGOUT_USER:
            return {
                ...initalState,
                darkMode: state.darkMode,
                user: null,
                token: null,
            }
        case TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                loginModalOpen: !state.loginModalOpen,
            }
        default:
            throw new Error(`no such action: ${action.type}`)
    }
}

export default reducer
