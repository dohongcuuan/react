import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onAdd: (product: IProduct) => void
}



interface IProps {
    onAdd: (product: IProduct) => void
}
const AddProductPage = (props: IProps) => { 
    
    const navigate = useNavigate() 
   


    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin')
        message.success('Thêm sản phẩm thành coong')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            {}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 1000, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label=" Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label=" Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    label=" image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    label="des"
                    name="des"
                    rules={[{ required: true, message: 'Please input your des!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="categoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your des!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm Sản Phẩm 
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage