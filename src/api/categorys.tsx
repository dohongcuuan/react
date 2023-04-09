import instance from "./instance";
import { Icategorys } from "../types/categorys";
const getAllcategorys = () => {
    return instance.get('/categories');
}
const getOnecategorys = (id: number) => {
    return instance.get('/categories/' + id);
}
const addcategorys = (categorys: Icategorys) => {
    return instance.post('/categories', categorys);
}
const updatecategorys = (categorys: Icategorys) => {
    return instance.patch('/categories/' + categorys._id, categorys);
}
const deletecategorys = (id: number) => {
    return instance.delete('/categories/' + id);
}

export { getAllcategorys, getOnecategorys, addcategorys, updatecategorys, deletecategorys }