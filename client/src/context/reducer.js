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
  POST_RECIPE_BEGIN,
  POST_RECIPE_SUCCESS,
  POST_RECIPE_ERROR,
  INPUT_CHANGE,
  CLEAR_INPUT_VALUES,
  GET_DRINKS_BEGIN,
  GET_DRINKS_SUCCESS,
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
    case GET_DRINKS_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case GET_DRINKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        drinks: action.payload.drinks,
        totalDrinks: action.payload.totalDrinks,
        numPages: action.payload.numPages,
      }
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }
    case CLEAR_INPUT_VALUES:
      const defaultValues = {
        name: '',
        imageURL: '',
        tags: '',
        ingredients: '',
        instructions: '',
      }
      return {
        ...state,
        ...defaultValues,
      }
    case POST_RECIPE_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case POST_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Recipe posted successfully!',
      }
    case POST_RECIPE_ERROR:
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
