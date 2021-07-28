import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {

    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //alert user to enter text while searching
    const SetAlert = (msg, type) => {
        debugger;
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });

        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
        }), 3000);
    }

    return <AlertContext.Provider
        value={
            {
                alert: state,
                SetAlert
            }
        }
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;