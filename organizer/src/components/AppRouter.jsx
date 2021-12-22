import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tasks from "../pages/Tasks";
import Weather from "../pages/Weather";
import Currency from "../pages/Currency";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import RequireAuth from "../hoc/RequireAuth";
import { routeNames } from "../router";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <>
        {!isAuth ?
            <Routes>
                <Route path={routeNames.LOGIN} element={<Login />} />
                <Route path={routeNames.REGISTRATION} element={<Registration />} />
            </Routes>
                :
            <Routes>
                <Route path={routeNames.TASKS} element={<Tasks />} />
                <Route path={routeNames.WEATHER} element={<Weather />} />
                <Route path={routeNames.CURRENCY} element={<Currency />} />
            </Routes>
        }
        </>
        );

    //     <Routes>
    //         <Route path={routeNames.LOGIN} element={<Login />} />
    //         <Route path={routeNames.REGISTRATION} element={<Registration />} />
    //         <Route path={routeNames.MAIN} element={
    //             <RequireAuth>
    //                     <Routes>
    //                         <Route path={routeNames.TASKS} element={<Tasks />} />
    //                         <Route path={routeNames.WEATHER} element={<Weather />} />
    //                         <Route path={routeNames.CURRENCY} element={<Currency />} />
    //                     </Routes>
    //             </RequireAuth>
    //         } />
    //     </Routes>
    // );
};

export default AppRouter;
