import {Request, Response } from 'express'
import { UserService } from '../service/UserService'
import { sign } from "jsonwebtoken"
const db = [
{
   
}
]
export class UserController {
    private userService: UserService

    constructor(service: UserService){
        this.userService = service;
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body
        if (!user.name || !user.email || !user.password) {
            return response.status(400).json({message: 'Bad request! Name, email e password são obrigatórios'})
        }
        if (user.password.length < 3) {
            return response.status(400).json({message: 'Bad request! Password deve ter no minimo 3 caracteres'})
        }
        this.userService.createUser(user.name, user.email,user.password)
        return response.status(201).json({message:'Usuario criado'})
}
    getAllUsers = (request: Request, response: Response) => {
       
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    getStatus = (request: Request, response: Response) => {
        return response.status(200).json ({message:'Bank API'})
    }

    deleteAllUsers = (request: Request, response: Response) => {
        this.userService.deleteAllUsers()
        return response.status(200).json({message: 'Todos os usuarios deletados'})
    }

    deleteUser = (request:Request, response:Response) => {
        const nome = request.params.name
        this.userService.deleteUser(nome)
        return response.status(200).json({message: `Usuario ${nome} deletado`})
    }

    updateUser = (request:Request, response:Response) => {
        const nome = request.params.name
        const email = request.body.email
        const updated = this.userService.updateUser(nome, email)
        if (!updated) {
            return response.status(404).json({message: `Usuario ${nome} não encontrado`})   
        }else {
            this.userService.updateUser(nome, email)
            return response.status(200).json({message: `Usuario ${nome} atualizado`})
        }
    }
    getUser = async (request:Request, response:Response) => {
        const {userId} = request.params
        const user = await this.userService.getUser(userId!)
        return response.status(200).json({
            userId: user?.user_id,
            name: user?.name,
            email: user?.email
        })
    }
    
}