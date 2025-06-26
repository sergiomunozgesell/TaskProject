import jwt from "jsonwebtoken"

class AuthMiddleware{

    static _options = {expiresIn: "1h" }


    static signToken(payload){
        if(!payload){
            throw new Error("Payload no provide");
            
        }
        const token = jwt.sign({_id:payload._id,username:payload.username,email:payload.email},process.env.SECRET_KEY,AuthMiddleware._options) 
        
        
        return token

    }

    static verifyToken(token){
        return jwt.verify(token, process.env.SECRET_KEY);
    }

    static authRouter(req,res,next){
        const token = req.cookies.authToken;
        if(!token){
            return res.status(401).send({message:"Token no provided"})
        }

        try {
            const decoded = AuthMiddleware.verifyToken(token);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).send({message:"Invalid or expired token"})
        }

    }

}


export default AuthMiddleware;