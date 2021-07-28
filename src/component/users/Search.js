import { useState, Fragment } from "react";
import { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    const [text, setText] = useState('');
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { searchUsers, ClearUsers, users } = githubContext;
    const ShowClear = users.length > 0 ? true : false

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            alertContext.SetAlert('Please enter text to search', 'light');
        }
        else {
            searchUsers(text);
            setText('');
        }
    }

    return (
        <Fragment>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' value={text} name='text' onChange={onChange} placeholder='Search Users' />
                <input type='submit' className='btn btn-dark btn-block' value='Search'></input>
            </form>
            {ShowClear && (<input type='button' value='Clear' className='btn btn-light btn-block' onClick={ClearUsers}></input>)}
        </Fragment>
    );
}

export default Search;