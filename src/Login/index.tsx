import React,{ReactElement} from'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './style.scss'
import { useHistory} from "react-router-dom"
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Login:React.FC=():ReactElement=>{
    const history = useHistory()
    const onFinish = (values: any) => {
        console.log(history)
        sessionStorage.setItem('userinfo',JSON.stringify(values))
        history.push('/Homes')
    };  
    return (
        <div className="loginBox">
            <Form
                className='formSty'
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
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
        
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>  
    )
}
export default Login