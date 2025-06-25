import User from "../user/user.schema.js"


class Validator{

    //  --------------------------  USUARIOS   --------------------------
    static async userExist(username,email){
        const usernameExist = await User.findOne({username});
        if(usernameExist){
            throw new Error("nombre de usuario ya se encuentra en uso");            
        }

        const emailExist = await User.findOne({email});
        if(emailExist){
            throw new Error("El correo ya se encuentra en uso");
    
        }    

        
        
    }



    // -------------------------- TASKS        --------------------------

    // -------------------------- TASKS DETAIL --------------------------



    // -------------------------- GENERAL       --------------------------
    static validateEmptyFields(fields,body){

        const empty = fields.filter(e => !Object.hasOwn(body,e));
        
        if(empty.length > 0 ){
            console.log(`campos pendientes en el body de la petición:...  ${empty.join(", ")}`);
            throw new Error("La petición no está completa, por favor validar campos ingresados"); 
        }  
        
    }

}


export default Validator;