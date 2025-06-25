import Validator from "../utils/validator.utils.js";
import UserService from "./user.services.js";

class UserControll{

    static Home(req,res){
        res.status(200).send("Bienvenido a HOME de usuario")
    } 

    static async Register(req,res){
        try {
            const {username,password,email} = req.body;
            Validator.validateEmptyFields(["username","password","email"],req.body);

            await Validator.userExist(username,email);
            
            const newuser = await UserService.register({username,password,email});
            if(!newuser){
                throw new Error("Error con la creación del usuario");
            }

            return res.status(200).send({message:`Usuario creado con éxito!! `, user:newuser});


        } catch (error) {
            
            return res.status(404).send({message:"No se logró crear con éxito el usuario", fault:error.message});
        }
    }


    static async TESTER(req,body){
        const {username,password,email} = req.body;
        
        await Validator.userExist(username,email);

        // Validator.validateEmptyFields(['username','password','email'], req.body);


    }



}

export default UserControll;