import mongoose, { mongo } from "mongoose";


class DB {

    static async Conn (){
        try {
            
            const conn = await mongoose.connect(process.env.URI)
            
            return conn;

        } catch (error) {
            return error;
        }
    }
}


export default DB;