import React, {useEffect} from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { routeNames } from "../router";
import { auth } from '../actions/user';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(auth());
    }, []);

    // if (!isAuth) {
    //     return <Navigate to={routeNames.LOGIN} state={{from: location}} />
    // }

    return children;
};

export default RequireAuth;
