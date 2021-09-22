import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateOngController } from './controllers/CreateOngController'
import { CreateUserController } from './controllers/CreateUserController'
import { DeleteOngController } from './controllers/DeleteOngController'
import { ListAllOngsController } from './controllers/ListOngsController'
import { UpdateOngController } from './controllers/UpdateOngController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ensureOwner } from './middlewares/ensureOwner'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
router.post('/login', authenticateUserController.handle)

const createUserController = new CreateUserController()
router.post('/users', createUserController.handle)

const createOngController = new CreateOngController()
router.post('/ongs', ensureAuthenticated, ensureOwner, createOngController.handle)

const listAllOngsController = new ListAllOngsController()
router.get('/ongs', listAllOngsController.handle)

const deleteOngController = new DeleteOngController()
router.delete('/ongs', ensureAuthenticated, ensureOwner, deleteOngController.handle)

const updateOngController = new UpdateOngController()
router.put('/ongs', ensureAuthenticated, ensureOwner, updateOngController.handle)

export { router }
