import mongoose from "mongoose";

class UserSchema {

    constructor(){
        this._schema = this.setSchema();
        this.model = this.getModel();
    }

    setSchema(){
        const schema = new mongoose.Schema(
            {
                username:{
                    type:String,
                    unique:true,
                    required:true,
                    trim:true
                },
                password:{
                    type:String,
                    required:true,
                    trim:true,
                    minglenght:8
                },
                email:{
                    type:String,
                    required:true,
                    unique:true,
                    trim:true
                }


            }
        )

        return schema;
    }


    getModel(){
        const User = mongoose.model("User",this._schema,"USUARIOS");
        return User;
    }

}

export default new UserSchema().getModel();