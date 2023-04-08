import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/product';
import { Link } from 'react-router-dom'




const ProductManagementPage = (props ) => {
    const data = props.products.map(items => {
        return{
          key: items?._id,
          name: items?.name,
          price: items?.price,
          des: items?.des,
          categoryId:items?.categoryId
        }
      })
    interface IProps {
        products: IProduct[],
        onRemove: (id: number) => void
    }
    const columns: ColumnsType<DataType> = [
        {
            title: ' Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: ' Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
        },
        
        {
            title: 'Description',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: 'categoryId',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={()=>props.onRemove(record.key)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];
    

    

    return (
        <div>
            <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} />
        </div>
    )
}

export default ProductManagementPage