import {Request, Response } from 'express'
import { UserService } from '../service/UserService'
const db = [
{
   
}
]
export class UserController {
    
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body

        if (!user.name || !user.email || !user.password) {
            return response.status(400).json({message: 'Bad request! Name, email e password são obrigatórios'})
        }
        if (user.password.length < 3) {
            return response.status(400).json({message: 'Bad request! Password deve ter no minimo 3 caracteres'})
        }
        userService.createUser(user.name, user.email)
        return response.status(201).json({message:'Usuario criado'})
}
    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()
        const users = userService.getAllUsers()
        return response.status(200).json(users)
    }

    getStatus = (request: Request, response: Response) => {
        return response.status(200).json ({message:'Bank API'})

    }

    deleteAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()
        userService.deleteAllUsers()
        return response.status(200).json({message: 'Todos os usuarios deletados'})
    }

    deleteUser = (request:Request, response:Response) => {
        const userService = new UserService()
        const nome = request.params.name
        userService.deleteUser(nome)
        return response.status(200).json({message: `Usuario ${nome} deletado`})
    }

    updateUser = (request:Request, response:Response) => {
        const userService = new UserService()
        const nome = request.params.name
        const email = request.body.email
        const updated = userService.updateUser(nome, email)
        if (!updated) {
            return response.status(404).json({message: `Usuario ${nome} não encontrado`})   
        }else {
            userService.updateUser(nome, email)
            return response.status(200).json({message: `Usuario ${nome} atualizado`})
        }
    }
    getUser = (request:Request, response:Response) => {
        const userService = new UserService()
        const user = userService.getUser()
        return response.status(200).json(user)
    }
    
}