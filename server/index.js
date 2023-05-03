import express from "express";
import dotenv from "dotenv";
import { Connection } from "./db.js";
import cors from "cors"
import bodyParser from "body-parser";
import Routes from "./routes/Route.js"
const app = express();
const PORT = 8000;
dotenv.config();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);



app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
