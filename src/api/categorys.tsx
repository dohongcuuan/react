import instance from "./instance";
import { Icategorys } from "../types/categorys";
import {token} from "./instance"
const getAllcategorys = () => {
    return instance.get('/categories');
}
const getOnecategorys = (id: number) => {
    return instance.get('/categories/' + id);
}
const addcategorys = (categorys: Icategorys) => {
    return instance.post('/categories', categorys,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const updatecategorys = (categorys: Icategorys) => {
    return instance.patch('/categories/' + categorys._id, categorys,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const deletecategorys = (id: number) => {
    return instance.delete('/categories/' + id,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}

export { getAllcategorys, getOnecategorys, addcategorys, updatecategorys, deletecategorys }