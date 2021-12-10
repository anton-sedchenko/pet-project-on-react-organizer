import React from 'react';
import { Layout, Row, Space } from 'antd';
import LoginForm from '../components/UI/loginForm/LoginForm';
// import {useLocation, Navigate, useNavigate} from 'react-router-dom';

const Login = () => {
    // const location = useLocation();
    // const fromPage = location.state?.from?.pathName || '/';

    return (
        <Layout>
            <Row justify="center" align="middle" style={{ paddingTop: '50px' }}>
                <Space direction="vertical">
                    <div style={{ textAlign: "center", marginBottom: '50px' }}>
                        <h1>Welcome to the organizer app!</h1>
                        <h3>Take control of your life and be super productive!</h3>
                    </div>
                    <LoginForm />
                </Space>
            </Row>
        </Layout>
    );
};

export default Login;
