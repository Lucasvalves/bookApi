import { Request, NextFunction, Response } from 'express'
import { UserRepository } from '../repositories/UserRepository'

class AuthMiddleware {
	private userRepository: UserRepository
	constructor() {
		this.userRepository = new UserRepository()
	}
	async auth(request: Request, response: Response, next: NextFunction) {
		const authHeader: string = request.headers.email as string
		if (!authHeader) {
			return response.status(401).json({
				code: 'token.missing',
				message: 'token missing',
			})
		}
		const findUser = await this.userRepository.findByEmail(authHeader)

		if (!findUser) {
			return response.status(400).json({
				code: 'token.not_found',
				message: 'token not found',
			})
		}
		request.user_id = findUser.id

		return next()
	}
}
export { AuthMiddleware }
