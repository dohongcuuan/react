export interface IUser{
    _id: number | string;
    name: string;
    password: string;
    email?:string
}