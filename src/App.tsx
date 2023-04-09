import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import AdminLayout from './pages/layouts/AdminLayout'
import Signin from './pages/admin/signin'
import AddCategories from './pages/admin/AddCategories'
import { getAllcategorys, getOnecategorys, addcategorys, updatecategorys, deletecategorys } from './api/categorys'
import CategorysList from './pages/admin/categoryslist'
function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllProduct().then(({ data }) =>setProducts(data.data.docs))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item._id !== id)))
    // console.log(products);
    
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data.data)))
  }
  const onHandleUpdate = (product: IProduct) => { 
  
    
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }



  const onHandleAddCategory = (category) => {
    addcategorys(category).then(() => {
      getAllcategorys().then(({data}) => setCategories(data))
    });
  };
  
  // const onHandleUpdateCategory = (category:ICategory) => {
  //   console.log(category);
    
  //   updateCategory(category).then(() => {
  //     setCategories(categories.map((item) => (item._id === category._id ? category : item)));
  //   });
  // };
  // const onHandleRemoveCategory = (id: string|number) => {
  //   deletecategorys(id).then(() => {
  //     setCategories(categories.filter((item) => item.id !== id));
  //   });
  // };
 
  
  return (
    <div className="App">
      <Routes>
        <Route path='/'>

          
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
          
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            
            <Route  path='products/list' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path='products/:id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
            {/* <Route path='add' element={<AddCategory onAdd={onHandleAddCategory} />} /> */}
            <Route path='categorys/add' element={<AddCategories onAdd={onHandleAddCategory} />} />
            <Route path='categorys/list' element={< CategorysList categories={categories}  />} />

        </Route>




        <Route path='/'>
        <Route path='login' element={<Signin />} /> 
        </Route>
        
      </Routes>
      
    </div>
  )
}

export default App
