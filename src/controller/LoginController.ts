import {Request, Response} from 'express'
import { sign } from 'jsonwebtoken'

const user = {

id_user: '123456',
name: 'Mateus Soares',
email: 'mateus@gmail.com',
password: 'password'


}
export class LoginController {
    login = async (request: Request, response:Response) => {
        return response.status(200).json(user)
    }
}
