import mongoose, { Schema, model } from "mongoose";
import { CreateUserInput, UserDetailsInput } from "../dto/User.dto";

interface UserDoc {
   
    user_name:string
    phone:string
    email:string
    password:string
    salt:string
    user_type:string
}

const userShema = new Schema<UserDoc>({

    user_name:{type:String , required:true},
    phone:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    salt:{type:String , required:true},
    user_type:{type:String , required:true},
})

const User = model<UserDoc>('User',userShema)

export {User}