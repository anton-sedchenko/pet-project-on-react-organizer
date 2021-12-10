import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {routeNames} from "../router";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { isAuth } = useSelector(state => state.isAuth);

    if (!isAuth) {

        return <Navigate to={routeNames.LOGIN} state={{from: location}} />
    }

    return children;
};

export default RequireAuth;
