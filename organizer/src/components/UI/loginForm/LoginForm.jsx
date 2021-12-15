import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
    return (
        <Form justify="center">
            <Form.Item
                label="Login"
                name="login"
                rules={[{ required: true, message: 'Please input your login!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
