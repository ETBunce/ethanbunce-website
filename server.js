// System
import {} from 'dotenv/config';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// App
import routes from './routes/routes.js'


const app = express();

// Figured out the following code from https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware

// Config
const PORT = process.env.PORT || 5000;


// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "dist")))

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

//Session setup
// const store = new MongoDBStore({
//     uri: 'mongodb+srv://jzdegrey:cs3750@sandbox.t6lzk2q.mongodb.net/gridWordFinder',
//     databaseName: 'grid-game-sessions',
// });

// store.on('error', function(error) {
//     console.log('mongo session store error: ' + error);
// });

// app.use(session({
//     secret: 'kitty cat',
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 6 // 1 week
//     },
//     store: store,
//     resave: true,
//     saveUninitialized: true
// }));

// Routes
app.use('/', routes);


// Listen

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => { console.log("server is running on http://localhost:" + PORT); });