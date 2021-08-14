import dotenv from 'dotenv'
dotenv.config();
const {PORT,NODE_ENV} = process.env
const config = {
 env: `${NODE_ENV}`,
 port: `${PORT}`,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
 mongoUri: process.env.MONGODB_URI ||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' +
 (process.env.MONGO_PORT || '27017') +
 '/mernproject'
}
export default config