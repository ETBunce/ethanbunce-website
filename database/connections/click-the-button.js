import mongoose, { mongo } from "mongoose";

const url = process.env.MONGODB_CONNECTION_STRING + 'ClickTheButton' || ''

const conn = await mongoose.createConnection(url).asPromise();

conn.model('Count', mongoose.Schema({
    count: Number
}));


export default conn;