const adminAuth = function(req,res,next){
    const token = 'Samuel';
    const isAdmin = token === 'Samuel';
    if(!isAdmin){
        console.log("Admin auth is checked");
        res.status(403).send("Unauthorized acess, you are not an admin");
        
    }else{
        next();
    }
}

const userAuth = function(req,res,next){
    const token = 'user';
    const isAdmin = token === 'user';
    // Here you can add your logic to check if the user is authenticated
    // For example you can check if the token is valid or if the user has the right permissions
    // For this example, we will just check if the token is equal to user
    // If the user is not authenticated, you can send a response with a status code of 403
    // and a message saying that the user is not authorized
    // If the user is authenticated, you can call the next middleware function
    // or send a response with a message saying that the user is authenticated 
    if(!isAdmin){
        console.log("User auth is checked");
        res.status(403).send("Unauthorized acess, you are not an admin");
        
    }else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}