
import { useState, useContext } from "react";
import { Form, Input, Button } from "antd";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const { login, signup, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (isLogin) {
      const response = await login(values);
      if (response?.status === "success") {
        setMessage("Login successful! 🎉");
        setTimeout(() => navigate("/"), 1000);
      } else {  
        setMessage(response?.message || "Login failed. Please try again.");
      }
    } else {
      const response = await signup(values);
      if (response?.status === "success") {
        setMessage("Signup successful! You can now log in.");
        setIsLogin(true);
      } else {
        setMessage(response?.message || "Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md w-80 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <Form
          name={isLogin ? "login" : "signup"}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }, { type: "email", message: "Invalid email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" },]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form.Item>
        </Form>
        <p className="mt-3 text-sm text-gray-400 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
          {isLogin ? (
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-400 hover:underline"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="text-blue-400 hover:underline"
            >
              Login
            </button>
          )}
        </p>
        {message && (
          <p className="mt-3 text-center text-yellow-400">{message}</p>
        )}
      </div>
    </div>
  );
}
