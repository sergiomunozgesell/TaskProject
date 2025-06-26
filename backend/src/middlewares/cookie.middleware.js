class CookieMiddleware{
    static authToken = "authToken"

    static setCookie(res,token){

        res.cookie(CookieMiddleware.authToken, token);

    }
}

export default CookieMiddleware;