import { useState } from "react";
import { Form, Input, Button, Card, message, ConfigProvider } from "antd";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    console.log("Signup Data:", values);
    message.success("Signup successful!");
    setLoading(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#1f1f1f",
          colorTextBase: "#ffffff",
          colorPrimary: "#1677ff",
        },
      }}
    >
      <div className="flex justify-center items-center  bg-gray-900 px-10 py-10">
        <Card
          className="w-full max-w-xl rounded-2xl shadow-xl my-10 px-7" // 👈 increased width + margin top/bottom
          style={{ backgroundColor: "#2c2c2c" }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Create an Account
          </h2>

          <Form
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            className="space-y-4"
          >
            <Form.Item
              label={<span className="text-white">Full Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Email Address</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email address!" },
              ]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Password</span>}
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password placeholder="********" />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Confirm Password</span>}
              name="confirmPassword"
              rules={[{ required: true, message: "Please confirm your password!" }]}
            >
              <Input.Password placeholder="********" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="rounded-lg"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default SignupForm;
