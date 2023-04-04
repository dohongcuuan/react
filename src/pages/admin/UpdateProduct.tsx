import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Button, Form, Input } from 'antd';
interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}

// const UpdateProductPage = (props) => {
//     const { id } = useParams() // lấy id từ url
//     const [product, setProduct] = useState({}) // khởi tạo state product
//     useEffect(() => {
//         const product = props.products.find(item => item.id == id) // tìm product có id trùng với id trên url
//         setProduct(product) // set lại giá trị cho state product
//     })
//     const [inputValue, setInputValue] = useState({}) // khởi tạo state inputValue
//     const onHandleChange = (e) => { // hàm xử lý khi input thay đổi
//         const { name, value } = e.target // lấy name và value của input
//         setInputValue({ ...inputValue, [name]: value }) // set lại giá trị cho inputValue
//     }
//     const onHandleSubmit = (e) => {// hàm xử lý khi submit form
//         e.preventDefault()
//         const updateData = { ...product, ...inputValue } // gộp 2 object lại với nhau (nếu inputValue không có giá trị sẽ giữ nguyên giá trị cũ)
//         props.onUpdate(updateData);
//     }
//     return (
//         <div>
//             <form action="" onSubmit={onHandleSubmit}>
//                 <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
//                 <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     )
// }


// const UpdateProductPage = (props) => {
//     const navigate = useNavigate()
//     const { register, handleSubmit, reset } = useForm()
//     const { id } = useParams() // lấy id từ url
//     useEffect(() => {
//         const currentProduct = props.products.find(item => item.id == id) // tìm product có id trùng với id trên url
//         reset(currentProduct) // reset lại form với giá trị của product
//     }, [props])
//     const onHandleSubmit = (data) => {
//         props.onUpdate(data);
//         navigate('/admin/products')
//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
//                 <input type="text" {...register('name')} />
//                 <input type="number" {...register('price')} />
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     )
// }



const UpdateProductPage = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    // const { register, handleSubmit, reset } = useForm()
    // useEffect(() => {
    //     const currentProduct = props.products.find((product) => product.id === Number(id))
    //     reset(currentProduct)
    // }, [props])
    // const onHandleSubmit = data => {
    //     props.onUpdate(data);
    // }



    const [product, setProduct] = useState<IProduct>() // khởi tạo biến state product có kiểu dữ liệu là IProduct
    useEffect(() => { // khi props thay đổi thì sẽ chạy useEffect này
        const currentProduct = props.products.find((product: IProduct) => product.id == Number(id))
        // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không
        setProduct(currentProduct) // nếu có thì set lại giá trị cho biến product
    }, [props])
    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [product])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: product?.id,
            name: product?.name,
            price: product?.price
        })
    }

    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin')
    };

    return (
        <div>
            <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish} >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProductPage