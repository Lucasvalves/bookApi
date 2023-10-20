//login: adm
//senha: lxglAUpZUo1Tv4YI
//mongodb+srv://adm:lxglAUpZUo1Tv4YI@cluster0.1j95tl4.mongodb.net/bookapi

import express, { Application, NextFunction, Request, Response } from 'express'
import { UserRoutes } from './routes/user.routes'
import { DbConnection } from './database'

const app: Application = express()
const userRoutes = new UserRoutes().getRoutes()
const database = new DbConnection()

app.use(express.json()) //para converter todos os dados das a rotas em json

app.use('/user', userRoutes)

database.connect()

app.use(express.urlencoded({ extended: true }))

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof Error) {
			return response.status(400).json({
				message: err.message,
			})
		}
		return response.status(500).json({
			status: 500,
			massage: 'Internal Server Error',
		})
	}
)

app.listen(3333, () => console.log('server is running'))
