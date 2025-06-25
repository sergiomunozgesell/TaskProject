import express from "express";
import UserControll from "./user.controll.js";

class UserRouter{


    constructor(){
        this.router = express.Router();
        this.setRoutes();
    }

    setRoutes(){

        // RUTA TEST PARA COMPROBAR FUNCIONALIDAD DE QUE ESTA FUNCIONANDO
        this.router.get('/test', (req,res)=>{
            try {

                return res.status(200).send("Bienvenido a la ruta usuario '/test' ");
                
            } catch (error) {
                res.status(400).send("Error con establecer conexión a la ruta", error)
            }
        })
        // POST TESTER
        this.router.post('/testpost',UserControll.TESTER)
        // RUTAS:
        /**** GET ***********/
        this.router.get('/home',UserControll.Home);
        
        /*** POST **********/
        this.router.post('/register',UserControll.Register);
    }

    getRouter(){
        return this.router;
    }
}


export default new UserRouter().getRouter();