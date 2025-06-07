import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks }  from './controllers/webhooks.js';


// initialise express
const app = express();

//connect to database
await connectDB();


// middleware
app.use(cors())


// routes
app.get("/", (req, res) => res.send("Api works.."))
app.post("/clerk", express.json(), clerkWebhooks)


// port
const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);    
})