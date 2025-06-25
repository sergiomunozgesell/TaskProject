import App from "./app.js";
import dotenv from "dotenv";
import User from "./user/user.schema.js";

dotenv.config();




const server = new App();

server.start();

// UTIL PARA DESARROLLO, Se debe apartar la logica y ambiente obviamente.
// async function LimpiarBD() {
    
//     await User.deleteMany()
//     console.log("Usuarios eliminados con éxito");
// }

// await LimpiarBD()