import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({component: Component, children, render, ...rest}) {

    return (
        <Route  {...rest}
        render={values => {
            if(window.localStorage.getItem('islogin')){
                return <Component />
            } else {
                return <Redirect to={{
                    pathname: "/login",
                    state: values.location.pathname,
                }} />
            }
        }}
        />
    )
}
