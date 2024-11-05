
let jwtSecreyKey = process.env.JWT_SECRET_KEY;

async function generateJWT(userId, username){

}

async function decodeJWT(token){

}

// middleware
async function validateUserAuth(request, response, next){

}

module.exports = {
    generateJWT,
    decodeJWT,
    validateUserAuth
}