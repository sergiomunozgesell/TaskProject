import User from "./user.schema.js";


class UserService{
    
    static async register(data){
        try {

            const newuser = await User.create(data);
            return newuser.username;
        } catch (error) {

            return error;
        }
    }

}


export default UserService;