import App from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const server = new App();

server.start();