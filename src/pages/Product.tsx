import React from 'react'
import { Link } from 'react-router-dom'
const ProductPage = (props) => { 

  const onHandleRemove = (id) => { 
      props.onRemove(id) 
  }
  return (
      <div>
        
          {props.products.map((item) => {
              return <div key={item.id}>
                  <h2> Tên: {item.name}</h2>
                  <h2>GIá :{item.price}</h2>
                  <h2>Des:{item.des}</h2>
                  {/* <button >Remove</button> */}
                  
              </div>
              

          })}
           <h2><Link to={'/login'} > Đăng Nhập </Link></h2>
            <h2><Link to={'/signup'} > Đăng Ký </Link></h2>
      </div>
  )
}

export default ProductPage