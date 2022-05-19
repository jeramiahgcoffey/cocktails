import { useReducer, useContext, createContext } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    TOGGLE_LOGIN_MODAL,
    TOGGLE_DARK_MODE,
    SET_SELECTED_INDEX,
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const darkMode = localStorage.getItem('darkMode')

const initalState = {
    darkMode: darkMode ? JSON.parse(darkMode) : false,
    selectedIndex: 0,
    showAlert: false,
    alertType: '',
    alertText: '',
    isLoading: false,
    loginModalOpen: false,
    user: user ? JSON.parse(user) : null,
    token: token,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState)

    // const authFetch = axios.create({
    //     baseURL: '/api/v1',
    // })

    const toggleDarkMode = () => {
        dispatch({ type: TOGGLE_DARK_MODE })
        localStorage.setItem(
            'darkMode',
            state.darkMode ? JSON.stringify(false) : JSON.stringify(true)
        )
    }

    const setSelectedIndex = (index) => {
        dispatch({ type: SET_SELECTED_INDEX, payload: { index } })
    }

    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const toggleLoginModal = () => {
        dispatch({ type: TOGGLE_LOGIN_MODAL })
        clearAlert()
    }

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN })
        // console.log(currentUser)
        try {
            const response = await axios.post(
                '/api/v1/auth/register',
                currentUser
            )
            const { user, token } = response.data
            dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } })
            addUserToLocalStorage({ user, token })
            setTimeout(toggleLoginModal, 1500)
        } catch (error) {
            // console.log(error)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert()
    }

    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN })
        try {
            const response = await axios.post('/api/v1/auth/login', currentUser)
            const { user, token } = response.data
            dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } })
            addUserToLocalStorage({ user, token })
            setTimeout(toggleLoginModal, 1500)
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert()
    }

    const logoutUser = () => {
        console.log('logging out')
        removeUserFromLocalStorage()
        dispatch({ type: LOGOUT_USER })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleDarkMode,
                setSelectedIndex,
                registerUser,
                loginUser,
                logoutUser,
                toggleLoginModal,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// Custom hook
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initalState, useAppContext }
