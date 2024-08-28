import { useRouteError } from "react-router-dom";

const Error = () => {
    /**
     * useRouterError is a hook given by react-router-dom
     * and calling this function will give us an error object
     */
    const error = useRouteError();
    console.log("Error -> ", error);
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <h3>
                {error.status} : {error.statusText}
            </h3>
        </div>
    );
};

export default Error;
