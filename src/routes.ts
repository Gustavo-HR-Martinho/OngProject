import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateOngController } from './controllers/CreateOngController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
router.post('/login', authenticateUserController.handle)

const createUserController = new CreateUserController()
router.post('/users', createUserController.handle)

const createOngController = new CreateOngController()
router.post('/ongs', ensureAuthenticated, ensureAdmin, createOngController.handle)

export { router }
