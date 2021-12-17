import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Row, Col } from 'antd';
import { LoginOutlined, ProfileOutlined, UnorderedListOutlined, CloudOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../router';
import { logout } from '../../store/userReducer';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <Row justify="end">
            {isAuth
                ?
                <Col span={10}>
                    <Menu mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => navigate(routeNames.TASKS)} key="home" icon={<UnorderedListOutlined />}>
                            Tasks
                        </Menu.Item>
                        <Menu.Item onClick={() => navigate(routeNames.WEATHER)} key="weather" icon={<CloudOutlined />}>
                            Weather
                        </Menu.Item>
                        <Menu.Item onClick={() => navigate(routeNames.CURRENCY)} key="currency" icon={<DollarCircleOutlined />}>
                            Currency
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                dispatch(logout());
                                navigate(routeNames.LOGIN);
                            }}
                            key="logout"
                            icon={<LoginOutlined />}
                        >
                            Log out
                        </Menu.Item>
                    </Menu>
                </Col>
                :
                <Col span={6}>
                    <Menu mode="horizontal" selectable={false} style={{ justifyContent: 'flex-end' }}>
                        <Menu.Item
                            onClick={() => {
                                navigate(routeNames.LOGIN);
                            }}
                            key="login"
                            icon={<LoginOutlined />}
                        >
                            Login
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                navigate(routeNames.REGISTRATION);
                            }}
                            key="registration"
                            icon={<ProfileOutlined />}
                        >
                            Registration
                        </Menu.Item>
                    </Menu>
                </Col>
            }
        </Row>
    );
};

export default Navbar;
