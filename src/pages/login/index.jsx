import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getLoginInfo, adminLogin, userLogin } from '../../services/login';
import global from '../../global';
import './index.less';


export default function Login(props) {

    const onFinish = async (values: any) => {
        const { username, password } = values;

        // 是否管理员
        const adminInfo = await adminLogin(username, password);
        const isAdmin = adminInfo.data.data;
        if(isAdmin){
            global.userInfo = {
                role: 'admin',
                name: isAdmin.adminname,
                pwd: isAdmin.adminpwd
            }
        }

        // 是否一般用户
        const userInfo = !isAdmin && await userLogin(username, password);
        const isUser = userInfo && userInfo.data.data;
        if(isUser){
            global.userInfo = {
                role: 'user',
                name: isUser.username,
                pwd: isUser.userpwd
            }
        }

        if (isAdmin || isUser) {
            if (props.location.state) {
                props.history.push(props.location.state);
            } else {
                props.history.push('/home');
            }
        } else {
            message.error('用户名或密码错误');
        }
    };

    const onFinishFailed = async (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="login-form"
        >
            <h2>登录</h2>
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input className="login-input" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password className="login-input" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" className="login-submit" >
                    登录
                </Button>
            </Form.Item>
            <a href="jacascript:;">没有账号？去注册</a>
        </Form>
    )
}
