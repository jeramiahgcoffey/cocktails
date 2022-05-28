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
  TOGGLE_MODAL,
  TOGGLE_DARK_MODE,
  SET_SELECTED_INDEX,
  POST_RECIPE_BEGIN,
  POST_RECIPE_SUCCESS,
  POST_RECIPE_ERROR,
  INPUT_CHANGE,
  CLEAR_INPUT_VALUES,
  GET_DRINKS_BEGIN,
  GET_DRINKS_SUCCESS
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const darkMode = localStorage.getItem('darkMode')
const selectedIndex = localStorage.getItem('selectedIndex')

const initalState = {
  darkMode: darkMode ? JSON.parse(darkMode) : true,
  selectedIndex: selectedIndex ? selectedIndex : 0,
  showAlert: false,
  alertType: '',
  alertText: '',
  isLoading: false,
  modalOpen: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  drinks: [],
  totalDrinks: 0,
  numPages: 1,
  page: 1,
  name: '',
  imageURL: '',
  tags: '',
  ingredients: '',
  instructions: ''
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1'
  })
  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )
  // ************************************** //

  const toggleDarkMode = () => {
    dispatch({ type: TOGGLE_DARK_MODE })
    localStorage.setItem(
      'darkMode',
      state.darkMode ? JSON.stringify(false) : JSON.stringify(true)
    )
  }

  const setSelectedIndex = (index) => {
    localStorage.setItem('selectedIndex', index)
    dispatch({ type: SET_SELECTED_INDEX, payload: { index } })
  }

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('selectedIndex')
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 2000)
  }

  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL })
    clearAlert()
  }

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)
      const { user, token } = response.data
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } })
      addUserToLocalStorage({ user, token })
      setTimeout(toggleModal, 1500)
    } catch (error) {
      // console.log(error)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg }
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
      setTimeout(toggleModal, 1500)
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
  }

  const logoutUser = () => {
    console.log('logging out')
    removeUserFromLocalStorage()
    dispatch({ type: LOGOUT_USER })
    getAllDrinks()
  }

  const getAllDrinks = async () => {
    const url = '/drinks'
    dispatch({ type: GET_DRINKS_BEGIN })
    try {
      const response = await authFetch(url)
      const { all, totalDrinks, numPages } = response.data
      // console.log(response)
      dispatch({
        type: GET_DRINKS_SUCCESS,
        payload: { drinks: all, totalDrinks, numPages }
      })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }

  const getUserDrinks = async () => {
    const url = '/drinks/user'
    dispatch({ type: GET_DRINKS_BEGIN })
    try {
      const response = await authFetch(url)
      const { drinks, totalDrinks, numPages } = response.data
      // console.log(response.data)
      dispatch({
        type: GET_DRINKS_SUCCESS,
        payload: { drinks, totalDrinks, numPages }
      })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }

  const handleInputChange = (key, value) => {
    dispatch({ type: INPUT_CHANGE, payload: { key, value } })
  }

  const clearInputValues = () => {
    dispatch({ type: CLEAR_INPUT_VALUES })
  }

  const postRecipe = async () => {
    const url = '/drinks'
    dispatch({ type: POST_RECIPE_BEGIN })
    try {
      const { name, imageURL, instructions } = state
      const tags = state.tags.split(',').map((tag) => tag.trim())
      const ingredients = state.ingredients.split(',').map((tag) => tag.trim())
      const recipe = { name, imageURL, instructions, tags, ingredients }
      await authFetch.post(url, recipe)
      dispatch({ type: POST_RECIPE_SUCCESS })
      dispatch({ type: CLEAR_INPUT_VALUES })
    } catch (error) {
      dispatch({
        type: POST_RECIPE_ERROR,
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
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
        getAllDrinks,
        getUserDrinks,
        toggleModal,
        handleInputChange,
        clearInputValues,
        postRecipe
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
