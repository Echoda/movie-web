import React from 'react'
import { Form, Input, Button } from 'antd';
import './index.less';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

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
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input className="login-input" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password className="login-input" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="login-submit" >
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}
