

import { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const response = await login(values);
    if (response.status === 'success') {
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-md bg-white">
      <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login