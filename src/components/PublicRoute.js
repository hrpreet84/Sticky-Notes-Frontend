import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { islogin } from '../utils/index';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    //console.log("State logged in: "+isLogin());
    return (
        <Route {...rest} render={props => (
            islogin() && restricted ?
                <Redirect to="/MyStickies" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;