import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const AddCategories = (props) => {
    
    const navigate = useNavigate();

   
  
    const onFinish = (values: any) => {
     
      props.onAdd(values);
      navigate("/admin");
      message.success("Thêm danh mục thành công!", 2);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
  
    return (
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 600, margin: "0 auto" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Categories Name"
            name="name"
            rules={[{ required: true, message: "Please input your Categories!" }]}
          >
            <Input />
          </Form.Item>
  
          
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Thêm danh mục
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

export default AddCategories