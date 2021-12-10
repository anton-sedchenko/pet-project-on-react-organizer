import React from "react";
import AppRouter from "../AppRouter";
import { Layout } from "antd";
import Navbar from "../navbar/Navbar";
import  './App.css'

function App() {
    return (
        <Layout className="layout">
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
}

export default App;
