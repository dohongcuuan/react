import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Icategorys } from '../../types/categorys';
import { Link } from 'react-router-dom'




const CategorysList = (props ) => {
    const data = props.categories.map(items => {
        return{
          key: items?._id,
          name: items?.name,
         
        }
      })
    interface IProps {
      categories: Icategorys[],
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
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={()=>props.onRemove(record.key)} >Remove</Button>
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

export default CategorysList