export interface User{
    id?:number;
    email?:string,
    fullName?:string
    address?: string,
    
}
export interface DataUserLogin{
    user:User,
    error:string
}