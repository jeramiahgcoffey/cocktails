import { useReducer, useContext, createContext } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from './actions'

const initalState = {
    isLoading: false,
    user: null,
    token: null,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState)

    // const authFetch = axios.create({
    //     baseURL: '/api/v1',
    // })

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await axios.post(
                '/api/v1/auth/register',
                currentUser
            )
            console.log(response)
            const { user, token } = response.data
            dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } })
        } catch (error) {
            console.log(error.response.data.msg)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
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
