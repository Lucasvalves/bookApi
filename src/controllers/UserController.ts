import { Request, Response, NextFunction } from 'express'
import { User } from '../models'
import { hash } from 'bcrypt'
import { UserRepository } from '../repositories/UserRepository'

class UserController {
	private userRepository: UserRepository
	constructor() {
		this.userRepository = new UserRepository()
	}
	index(request: Request, response: Response, next: NextFunction) {
		//buscar todos
	}
	show(request: Request, response: Response, next: NextFunction) {
		//buscar apenas um
	}
	async store(request: Request, response: Response, next: NextFunction) {
		const { name, password, email } = request.body

		try {
			const findUser = await this.userRepository.findByEmail(email)
			if (findUser) {
				throw new Error('User Already Exists')
			}

			const hashPassword = await hash(password, 10)
			const createUser = await this.userRepository.create({
				name,
				password: hashPassword,
				email,
			})

			return response.json({ createUser })
		} catch (error) {
			next(error)
		}
	}
	update(response: Response, next: NextFunction) {
		//atualizar apenas um
	}
}
export { UserController }
