import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, WalletOutlined } from '@ant-design/icons';
import { addUser } from '../../services/user';
import './index.less';


export default function Login(props) {

    const onFinish = async (values: any) => {
        const { username, password, email } = values;
        try {
            await addUser({username, userpwd: password, email})
            message.success('注册成功，请登录')
            props.history.push('/login');
        } catch {
            message.error('注册失败，请稍后重试')
        }
        // console.log(username, password, email)
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
            <h2>注册</h2>
            <Form.Item
                name="username"
                rules={[{ required: true, message: '用户名' }]}
            >
                <Input className="login-input" prefix={<UserOutlined />} autoComplete="new-password" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: '密码' }]}
            >
                <Input.Password className="login-input" prefix={<LockOutlined />} />
            </Form.Item>

            
            <Form.Item
                name="email"
                rules={[{ required: true, message: '邮箱' }]}
            >
                <Input className="login-input" prefix={<WalletOutlined />} />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" className="login-submit" >
                    注册
                </Button>
            </Form.Item>
            <a href="/login">返回登录</a>
        </Form>
    )
}
