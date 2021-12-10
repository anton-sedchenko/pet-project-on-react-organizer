import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tasks from "../pages/Tasks";
import Weather from "../pages/Weather";
import Currency from "../pages/Currency";
import Login from "../pages/Login";
import RequireAuth from "../hoc/RequireAuth";
import { routeNames } from "../router";

const AppRouter = () => {

    return (
        <Routes>
            <Route path={routeNames.LOGIN} element={<Login/>} />
            <Route path={routeNames.MAIN} element={
                <RequireAuth>
                    <>
                        <Routes>
                            <Route path={routeNames.TASKS} element={<Tasks />} />
                            <Route path={routeNames.WEATHER} element={<Weather />} />
                            <Route path={routeNames.CURRENCY} element={<Currency />} />
                        </Routes>
                    </>
                </RequireAuth>
            } />
        </Routes>
    );
};

export default AppRouter;
