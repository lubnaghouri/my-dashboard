import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';
const { TextArea } = Input;     

const EditForm = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const navigator = useNavigate();
    const params = useParams();


    const onFinish = (values) => {
       setLoading(true);
        axios.put(`https://68b91e2ab7154050432a09c2.mockapi.io/api/products/${params.id}`,values)
            .then(function (response) {
               console.log(response.data);
                    navigator('/products');                             
            }).catch(function (error) {
                console.log(error);
            }).finally( () => {
                setLoading(false);
            }
            );

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }


    useEffect(() => {
        setLoading(true);
        axios.get(`https://68b91e2ab7154050432a09c2.mockapi.io/api/products/${params.id}`)
            .then((response) => {
                setProduct(response.data)
            }).finally(() => {
                setLoading(false);
            })

    }, []); 

useEffect(() => {
    if (product)                           
    form.setFieldsValue({
        name: product.name || '',                
        price: product.price || '',
        image: product.image || '',
        rating: product.rating || '',
        description: product.description || '',
    });
}                   
, [product, form]);  



  return (
    <div className='p-4 max-w-xl mx-auto'>  
    <h2 className="text-3xl text-center font-bold mb-5">Edit Product</h2>
              <Form
                            form={form}
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                <Form.Item
                    label="Product Name"
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

export default EditForm