
import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Select, Card, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function SignupForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:9000/user/signup", {
        name: values.name,
        email: values.email,
        image: values.image,
        gender: values.gender,
        password: values.password,
      });
      if (res.status === 200) {
        message.success("Signup successful!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.errors || "Signup failed!");
      } else {
        message.error("Server error!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-12 bg-gray-900">
      <Card className="w-full max-w-md px-8 py-6 rounded-3xl shadow-2xl bg-gray-800 text-white border border-gray-700">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-white tracking-wide drop-shadow">Sign Up</h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="space-y-5"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input
              placeholder="Name"
              className="h-12 text-base rounded-xl bg-gray-900 text-white border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }, { type: "email", message: "Email is invalid" }]}
          >
            <Input
              placeholder="Email"
              type="email"
              className="h-12 text-base rounded-xl bg-gray-900 text-white border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: "Image URL is required" }]}
          >
            <Input
              placeholder="Image URL"
              className="h-12 text-base rounded-xl bg-gray-900 text-white border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Gender is required" }]}
            initialValue="male"
          >
            <Select
              className="w-full h-12 text-base rounded-xl bg-gray-900 text-gray-400 border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              dropdownStyle={{ backgroundColor: '#1f2937', color: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
              placeholder="Select Gender"
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }, { min: 6, message: "Password must be at least 6 characters" }]}
          >
            <Input.Password
              placeholder="Password"
              className="h-12 text-base rounded-xl bg-gray-900 text-white border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[{ required: true, message: "Please confirm your password" }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            })]}
          >
            <Input.Password
              placeholder="Confirm Password"
              className="h-12 text-base rounded-xl bg-gray-900 text-white border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              allowClear
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition-all duration-200" loading={loading}>
            Sign Up
          </Button>
        </Form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Button type="link" className="text-blue-400 p-0" onClick={() => navigate('/login')}>
            Login
          </Button>
        </p>
      </Card>
    </div>
  );
}

export default SignupForm;
