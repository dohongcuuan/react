import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Button, Form, Input } from 'antd';
interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}




const UpdateProductPage = (props: IProps) => {
    const { id:_id } = useParams()
    const navigate = useNavigate()
   


    const [product, setProduct] = useState<IProduct>()
    useEffect(() => { 
        const currentProduct = props.products.find((product: IProduct) => product._id == _id)
       
        
       
        setProduct(currentProduct) 
    }, [props])
    useEffect(() => { 
        setFields() 
    }, [product])
    const [form] = Form.useForm();
   

    const setFields = () => {
        form.setFieldsValue({ 
            id: product?.id,
            name: product?.name,
            price: product?.price,
            des:product?.des,
            categoryId:product?.categoryId
        })
    }

    const onFinish = (values: any) => {
        
        props.onUpdate({_id,...values});
        navigate('/admin')
        message.success('cập nhật sản phẩm thành công')
    };

    return (
        <div>
            <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish} >
                {}
                

                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
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
                        Update Sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProductPage