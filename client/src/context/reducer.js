import {
    REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
} from './actions'

const reducer = (state, action) => {
    switch (action.type) {
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
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        default:
            throw new Error(`no such action: ${action.type}`)
    }
}

export default reducer
