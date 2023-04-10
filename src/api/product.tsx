import instance from "./instance";
import { IProduct } from "../types/product";
import {token} from "./instance"
const getAllProduct = () => {
    return instance.get('/products');
}
const getOneProduct = (id: number) => {
    return instance.get('/products/' + id);
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const updateProduct = (product: IProduct) => {
    return instance.patch('/products/' + product._id, product,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
    
}

export { getAllProduct, getOneProduct, addProduct, updateProduct, deleteProduct }