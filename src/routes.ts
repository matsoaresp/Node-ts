import { Router, Request, Response } from 'express'
import { UserController } from './controller/UserController'

const userController = new UserController()

export const router = Router()
router.get('/', userController.getStatus)
router.post('/user',userController.createUser)
router.get('/all', userController.getAllUsers)
router.delete('/deleteAll', userController.deleteAllUsers)
router.delete('/delete/:name', userController.deleteUser)
router.put('/update/:name', userController.updateUser)