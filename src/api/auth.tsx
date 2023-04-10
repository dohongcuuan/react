import { IUser } from '../types/auth';
import instance from './instance';
export const signup =(user:IUser)=> {
    return instance.post("/signup", user)
}
export const login =(user:IUser)=> {
    return instance.post("/login", user)
}