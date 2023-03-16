import express,{Request,Response,NextFunction} from "express";
import { UserCreation } from "../controllers/UserController";

const router = express.Router()

router.post('/user',UserCreation)




export {router as AdminRouter}



