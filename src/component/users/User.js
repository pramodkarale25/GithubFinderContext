import { useEffect, Fragment } from "react";
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
import { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, getUserRepos, repos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        html_url,
        followers,
        following,
        public_repos,
        public_gists
    } = user;

    if (loading) return <Spinner></Spinner>

    return <Fragment>
        <p><Link to='/' className='btn btn-dark'>Back to search</Link></p>
        <div className='card grid-2'>
            <div className='all-center'>
                <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }}></img>
                <h1>{name}</h1>
                <p>Location: {location}</p>
            </div>
            <div>
                {bio && <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </Fragment>}
                <a href={html_url} className='btn btn=dark my-1'>Visit Github Profile</a>
            </div>
        </div>
        <div className='card text-center'>
            <div className='badge badge-primary'>Followers: {followers}</div>
            <div className='badge badge-success'>Following: {following}</div>
            <div className='badge badge-light'>Public Repos: {public_repos}</div>
            <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos}></Repos>
    </Fragment>
}

export default User;