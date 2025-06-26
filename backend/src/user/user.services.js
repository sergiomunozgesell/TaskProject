import User from "./user.schema.js";


class UserService{

    // VER REGISTROS
    static async getusers(){
        const users = await User.find();
        return users;
    }


    ////////////////
    

    static async register(data){
        try {

            const newuser = await User.create(data);
            return newuser.username;
        } catch (error) {

            return error;
        }
    }

    static async loguser(username, password){
        try {
            const log = await User.findOne({ username, password });
            if(!log){                
                throw new Error("Error con los datos ingresados por favor revisar.");
            }

            
            
            return log;
        } catch (error) {
            return error;
        }
    }

}


export default UserService;