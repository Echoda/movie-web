import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';


export default function Login(props) {
    const onFinish = (values: any) => {
        console.log('Success:', values);
        window.localStorage.setItem('islogin', true);

        if(props.location.state) {
            props.history.push(props.location.state);
        } else {
            props.history.push('/home');
        }

    };

    const onFinishFailed = (errorInfo: any) => {
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
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input className="login-input" prefix={<UserOutlined />}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password className="login-input" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" className="login-submit" >
                    登录
                </Button>
            </Form.Item>
            <a href="jacascript:;">注册账户</a>
        </Form>
    )
}
