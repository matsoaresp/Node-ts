import { Router, Request, Response } from 'express'
import { UserController } from './controller/UserController'
import { LoginController } from './controller/LoginController'  
import { UserService } from './service/UserService'

const userService = new UserService()
const userController = new UserController(userService)
const loginController = new LoginController()

export const router = Router()
router.get('/', userController.getStatus)
router.get('/all', userController.getAllUsers)
router.get('/user/:userId',userController.getUser)
router.post('/user',userController.createUser)
router.post('/login', loginController.login)
router.delete('/deleteAll', userController.deleteAllUsers)
router.delete('/delete/:name', userController.deleteUser)
router.put('/update/:name', userController.updateUser)

