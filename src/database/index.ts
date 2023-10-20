import mongoose from 'mongoose'

class DbConnection {
	async connect() {
		try {
			await mongoose.connect(
				'mongodb+srv://adm:lxglAUpZUo1Tv4YI@cluster0.1j95tl4.mongodb.net/bookapi'
			)
			console.log('Connect to database')
		} catch (error) {
			console.log('Error to connect')
		}
	}
}
export { DbConnection }
