import mongoose, { mongo } from "mongoose";

const url = process.env.MONGODB_CONNECTION_STRING + 'IAmSam' || ''

const conn = await mongoose.createConnection(url).asPromise();

export default conn;