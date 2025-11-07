import { UserRepository } from "../repositories/UserRepository"
import { AppDataSource } from "../database"
import {User} from "../entities/User"
import { sign } from "jsonwebtoken"

const db = [
{
    name: "Mateus",
    email: "mateus@gmail.com"
}
]
export class UserService {

    private userRepository: UserRepository

    constructor(userRepository = new UserRepository(AppDataSource.manager)
){
    this.userRepository = userRepository
}
    getUser = (userId: string): Promise<User | null >=> {
        return this.userRepository.getUser(userId)
    }

    getAuthenticatedUser = async (email:string, password:string): Promise <User | null > =>{
        return this.userRepository.getUserByEmailAndPassword(email,password)

    }

    async createUser(name: string, email: string, password:string) {
        const user =  this.userRepository.create ({
            name,
            email,
            password
        });
        await this.userRepository.save(user)
        console.log("Usuario salvo no banco", user)
        return user;
    }

    getAllUsers = () =>{
        return db
    }

    deleteAllUsers = () => {
        db.length = 0
    }

    deleteUser(nome: string | undefined) {
        const index = db.findIndex(user => user.name === nome);
        if (index !== -1) {
            db.splice(index, 1);
        }
    }   

    updateUser(name: string | undefined, email: string ) {
        const user = db.find(user => user.name === name);
        if (user) {
            user.email = email;
            console.log("DB Atualizado", db)
            return true
        } else {
            return false
    }
}

    getToken = async (email: string , password: string): Promise<string> =>{
        const user = await this.getAuthenticatedUser(email,password)
        
        if (!user){
            throw Error('Email/password invalid!')
            
        }
        const tokenData = {
            name: user?.name,
            email: user?.email
        }

        const tokenKey = '123456789'

        const tokenOptions = {
            subject: user?.user_id
        }
        const token = sign(tokenData,tokenKey,tokenOptions)
        return token
    }
}