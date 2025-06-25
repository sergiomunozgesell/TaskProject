import express from "express";




class App {


    constructor(){
        this.app = express();
        

    }

    config(){
        
    }

    middlewares(){
        this.app.use(express.json());
    }


    start (){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`App running on PORT http://localhost:3000`);
            
        })
    }

}



export default App;