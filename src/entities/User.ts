import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryColumn({nullable: false})
    user_id: string

    @Column({nullable: false})
    name: string 

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    constructor(
        user_id: string ,name: string ,email: string, password: string){
            this.user_id = randomUUID()
            this.name = name
            this.email = email
            this.password = password
    }

}