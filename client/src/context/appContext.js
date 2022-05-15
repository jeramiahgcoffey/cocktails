import { useReducer, useContext, createContext } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initalState = {
    showAlert: false,
    alertType: '',
    alertText: '',
    isLoading: false,
    user: user ? JSON.parse(user) : null,
    token: token,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState)

    // const authFetch = axios.create({
    //     baseURL: '/api/v1',
    // })

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
        }, 2000)
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
        } catch (error) {
            // console.log(error)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert()
    }

    return (
        <AppContext.Provider value={{ ...state, registerUser }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initalState, useAppContext }
