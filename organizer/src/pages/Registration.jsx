import React, {useState} from 'react';
import { Layout, Row, Space } from 'antd';
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/ButtonDefault';
import { registration } from '../actions/user';
import './Login.css';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Layout>
            <Row justify="center" align="middle" style={{ paddingTop: '50px' }}>
                <Space direction="vertical">
                    <div style={{ textAlign: "center", marginBottom: '50px' }}>
                        <h1>Welcome to the organizer app!</h1>
                        <h3>Take control of your life and be super productive!</h3>
                        <h2>Registration form</h2>
                    </div>
                    <div className="auth-form">
                        <div className="auth-form__content-wrapper">
                            <Input value={email} setValue={setEmail} type="text" placeholder="*Enter email" />
                            <Input value={password} setValue={setPassword} type="text" placeholder="*Enter password" />
                            <Button onClick={() => registration(email, password)}>Register</Button>
                        </div>
                    </div>
                </Space>
            </Row>
        </Layout>
    );
};

export default Registration;
