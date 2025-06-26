// import { authToken } from "../config/const.config.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import CookieMiddleware from "../middlewares/cookie.middleware.js";
import Validator from "../utils/validator.utils.js";
import UserService from "./user.services.js";
import jwt from "jsonwebtoken";

class UserControll {

    static Home(req, res) {
        const {username} = req.user;

        return res.status(200).send(`Bienvenido ${username}`);
    }

    // SOLO PARA VER REGISTROS.
    static async getUsers(req, res) {
        const usuarios = await UserService.getusers();
        return res.status(200).send({ message: "Usuarios encontrados:", users: usuarios });
    }

    static async Register(req, res) {
        try {
            const { username, password, email } = req.body;
            Validator.validateEmptyFields(["username", "password", "email"], req.body);

            await Validator.userExist(username, email);

            const newuser = await UserService.register({ username, password, email });
            if (!newuser) {
                throw new Error("Error con la creación del usuario");
            }

            return res.status(200).send({ message: `Usuario creado con éxito!! `, user: newuser });


        } catch (error) {

            return res.status(404).send({ message: "No se logró crear con éxito el usuario", fault: error.message });
        }
    }


    static async Login(req, res) {
        try {
            const { username, password } = req.body;
            Validator.validateEmptyFields(['username', "password"], req.body);

            const log = await UserService.loguser(username, password);
            if (log instanceof Error || !log || log.message) {
                return res.status(401).send({ message: "Credenciales incorrectas o usuario no encontrado." });
            }

            const token = AuthMiddleware.signToken(log);

            CookieMiddleware.setCookie(res,token);            

            return res.status(200).send({ message: "Login exitoso", user: log.username });
        } catch (error) {
            return res.status(500).send({ message: "Error en el login", fault: error.message });
        }
    }

    static async TESTER(req, body) {
        const { username, password, email } = req.body;

        await Validator.userExist(username, email);

        // Validator.validateEmptyFields(['username','password','email'], req.body);


    }



}

export default UserControll;