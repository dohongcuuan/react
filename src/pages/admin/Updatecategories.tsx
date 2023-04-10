import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Icategorys } from '../../types/categorys'
import { Button, Form, Input } from 'antd';
interface IProps {
    categories: Icategorys[],
    onUpdate: (categories: Icategorys) => void
}




const Updatecategories = ({categories, onUpdate} :IProps) => {
    const { id:_id } = useParams()
    const navigate = useNavigate()
   
   


    const [categorie, setcategories] = useState<Icategorys>()
    useEffect(() => { 
        const currentcategories = categories.find((categorie: Icategorys) => categorie._id == _id)
       
        
       
        setcategories(currentcategories) 
    }, [categories])
    useEffect(() => { 
        setFields() 
    }, [categorie])
    console.log(categorie);
    
    const [form] = Form.useForm();
   

    const setFields = () => {
        form.setFieldsValue({ 
            id: categorie?._id,
            name: categorie?.name,
           
        })
    }

    const onFinish = (values: any) => {
        
        onUpdate({_id,...values});
        navigate('/admin/categorys/list')
       
    };

    return (
        <div>
            <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish} >
                {}
                

                <Form.Item
                    label="categories Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                
                

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update categories
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Updatecategories