const db = [
{
    name: "Mateus",
    email: "mateus@gmail.com"
}
]
export class UserService {


    createUser(name: string, email: string) {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log("DB Atualizado", db)
        
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
}}