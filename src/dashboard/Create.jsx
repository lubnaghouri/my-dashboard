

import { Button, Form, Input, InputNumber } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import restClient from "../services/restClient";
const { TextArea } = Input;

const Create = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigator = useNavigate();



    const onFinish = (values) => {
        setLoading(true);
       restClient.post('/product/create', values)
        .then(function (response) {
               console.log(response.data);
                    navigator('/products');

            }).catch(function (error) {
                console.log(error);
                 setError(error.response?.data?.message || "Something went wrong. Please try again later.");

            }).finally( () => {
                setLoading(false);
            });



    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        //create a card to hold a form  
        <div className="bg-white rounded-xl shadow p-7 max-w-xl mx-auto">
            <h2 className="text-3xl text-center font-bold mb-5">Create Product</h2>


            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='space-y-4 bg-white p-5'
            >
                <Form.Item  className=" py-2"
                    label ="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter product name!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'This field is requied!' }]}
                >
                    <InputNumber min={1} max={500} />
                </Form.Item>


                <Form.Item
                    label="Image URL"
                    name="image"
                    rules={[{ required: true, message: 'Please enter product name!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: 'This field is requied!' }]}
                >
                    <InputNumber min={1} max={5} />
                </Form.Item>


                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'This field is requied!' }]}
                >
                    <TextArea rows={4} placeholder="maxLength is 6" />
                </Form.Item>



                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>



        </div>
    )
}

export default Create