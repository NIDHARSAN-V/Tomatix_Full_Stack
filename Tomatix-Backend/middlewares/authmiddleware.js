const jwt = require("jsonwebtoken")

const authmiddle = function (req, res, next) {
    
    try{
       const token  = req.cookies.token;
       console.log(token)
       if(!token)
        {
            return res.json({Error:"You Are Failed in Middle Ware" , success:false})
        }
        else
        {
            jwt.verify(token , process.env.JWT_SECRET , function(err,decoded)
        {
             if(err)
                {
                    return res.json({Error:"Token Error in verification",success:false})
                }
                else{
                    
                    req.userid = decoded.id;
                    console.log(req.userid)
                    next();
                }
        })
        }
    }
    catch(error)
    {
        console.log(error)
        
    }
}

module.exports = {authmiddle}