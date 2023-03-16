import express,{NextFunction, Request,Response} from 'express'
import {CreateUserInput} from '../dto/User.dto';
import {User} from '../models/User';
import bcrypt from "bcryptjs"

export const UserCreation = async (req:Request,res:Response,next:NextFunction) => {
    const {user_name, phone,email,password,user_type} = <CreateUserInput>req.body
      
        const createUser = await User.create({
           
        })

}

