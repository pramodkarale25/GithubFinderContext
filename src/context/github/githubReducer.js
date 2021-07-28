import {
    SET_LOADING,
    GET_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS
} from '../types'

const GitHubReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }

        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default GitHubReducer;