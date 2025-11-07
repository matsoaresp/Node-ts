import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entities/User";


export class UserRepository {
    private manager: EntityManager

    constructor(manager: EntityManager){
        this.manager = manager;
    }

    create = (data: Partial<User>): User => {
        return this.manager.create(User,data)
    }

    save = async (user: User):Promise<User> =>{
        return await this.manager.save(User,user);
    }

    

    getUser = async (userId: string): Promise<User | null> => {
        return this.manager.findOne(User,
            {where: {
                user_id: userId}
            })
}

    getUserByEmailAndPassword = async(email: string, password: string): Promise <User | null> => {
        return this.manager.findOne(User, {
            where: {
            email,
            password
        }})
    }
}