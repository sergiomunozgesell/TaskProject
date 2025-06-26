import express from "express";
import UserRouter from "./user/user.router.js";
import DB from "./config/db.config.js";
import cookieParser from "cookie-parser";


class App {


    constructor(){
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();

    }

    async config(){        
        await DB.Conn();
        
    }

    middlewares(){

        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    routes(){
        this.app.use('/api/user', UserRouter)
    }


    start (){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`App running on PORT http://localhost:3000`);
            
        })
    }

}



export default App;