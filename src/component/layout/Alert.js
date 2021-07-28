import { Fragment, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
        <Fragment>
            {alert && (<div className={`alert alert-${alert && alert.type}`}>
                {alert && alert.msg}
            </div>)}
        </Fragment>
    );
}

export default Alert;