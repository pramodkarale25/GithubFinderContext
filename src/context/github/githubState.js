import { useReducer } from "react";
import GithubReducer from './githubReducer'
import GithubContext from "./githubContext";
import {
    SET_LOADING,
    GET_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

import axios from "axios";

let githubClientID='204d9dc85eb2097b2dba';
let githubClientSecret='5febc9b051eb6e366c34bd83ee649adeef1c09b5';

// if (process.env.NODE_ENV !== 'production') {
//     githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
//     githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
// }
// else {
//     githubClientID = process.env.GITHUB_CLIENT_ID;
//     githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
// }

const GithubState = props => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users with particular text
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_USERS,
            payload: res.data.items
        });
    }

    //clear the users from state.
    const ClearUsers = () => {
        setLoading();
        dispatch({
            type: GET_USERS,
            payload: []
        });
    }

    //get user details for specific username
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }

    //get repos details for specific username
    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?perpage=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider
        value={
            {
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                ClearUsers,
                getUser,
                getUserRepos
            }
        }
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;