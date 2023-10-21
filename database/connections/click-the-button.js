import mongoose, { mongo } from "mongoose";

const url = process.env.MONGODB_CONNECTION_STRING + 'ClickTheButton' || ''

console.log('ClickTheButton connection string: ' + url);

const conn = await mongoose.createConnection(url).asPromise();
console.log('ClickTheButton connection readyState: ' + conn.readyState);

conn.model('Count', mongoose.Schema({
    count: Number
}));


export default conn;