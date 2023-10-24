import { Request, Response, NextFunction } from 'express'
import { BooksRepository } from '../repositories/BooksRepository'
class BooksController {
	private booksRepository: BooksRepository
	constructor() {
		this.booksRepository = new BooksRepository()
	}
	store(request: Request, response: Response, next: NextFunction) {
		const { name, author, company, read, dataRead, descripton, rate } =
			request.body

		const { user_id } = request

		try {
			console.log('agora vai', name)
		} catch (error) {
			next(error)
		}
	}
}
export { BooksController }
