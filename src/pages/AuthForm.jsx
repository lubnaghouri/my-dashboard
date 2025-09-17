
import { useState, useContext, useEffect } from "react";
import { Form, Input, Button } from "antd";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
  const [error, setError] = useState(null);
  const { login, user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const result = await login(values);
    if (result.status == "OK") {
      navigate('/');

    } else {
      setError("Invalid login credentials or You are not authorized to access this resource.");
    }
  };

  useEffect(() => {
    if (token && user) {
      navigate('/');
    }
  }, [token, user]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
  <div className="bg-white p-10 rounded-xl shadow w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: 'Please input your email address!' },
              { type: 'email', message: 'Please enter a valid email address!' }
            ]}
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

          {error && <div className="mb-4 text-red-500">{error}</div>}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>


  )
};

export default AuthForm;

