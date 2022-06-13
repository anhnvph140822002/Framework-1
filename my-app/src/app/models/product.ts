import { FormsModule } from "@angular/forms";
export interface IProduct{
    id?:number,
    name:string,
    price:Number,
    subject:String,
    status:boolean
}
export interface IUser{
    id?: number,
    username?:string,
    email?:string,
    password?: string,
    image?: string,
    role?: number
}
