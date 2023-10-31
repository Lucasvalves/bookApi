import { Router } from 'express'
import { BooksController } from '../controllers/BooksController'
import { AuthMiddleware } from '../middlewares/AuthMiddleware'

class BooksRoutes {
	private router: Router
	private booksController: BooksController
	private authMiddleware: AuthMiddleware

	constructor() {
		this.router = Router()
		this.authMiddleware = new AuthMiddleware()
		this.booksController = new BooksController()
	}
	getRoutes(): Router {
		this.router.post(
			'/',
			this.authMiddleware.auth.bind(this.authMiddleware),
			this.booksController.store.bind(this.booksController)
		)

		this.router.get(
			'/',
			this.authMiddleware.auth.bind(this.authMiddleware),
			this.booksController.index.bind(this.booksController)
		)
		this.router.delete(
			'/:id',
			this.authMiddleware.auth.bind(this.authMiddleware),
			this.booksController.delete.bind(this.booksController)
		)
		this.router.put(
			'/',
			this.authMiddleware.auth.bind(this.authMiddleware),
			this.booksController.update.bind(this.booksController)
		)

		return this.router
	}
}
export { BooksRoutes }
