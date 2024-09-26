const userModel = require("../../models/usermodel");
const bcrypt = require("bcrypt")
const jwt  = require("jsonwebtoken")
//login by admin
// const loginController = async (req, res) => {
//     try {
//         const user = await userModel.findOne({ email: req.body.email });
//         if (!user) {
//             return res
//                 .status(200)
//                 .send({ message: "user not found", success: false });
//         }
//         const isMatch = await bcrypt.compare(req.body.password, user.password);
//         if (!isMatch) {
//             return res
//                 .status(200)
//                 .send({ message: "Invalid EMail or Password", success: false });
//         }
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//             expiresIn: "1d",
//         });
//         res.status(200).send({ message: "Login Success", success: true, token });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: `Error in Login CTRL ${error.message} ` });
//     }
// };

const loginController = async function (req, res) {
    try {
        console.log("entered login")
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(200).send({ message: "No User Found ", success: false })
        }
        
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        const issection = "dying"
        // issection="dying"
        console.log(issection)
        if (!isMatch) {
            return res.status(200).send({ message: "Invalid Email or Password", success: false });
        }
        if (!issection) {
            return res.status(200).send({ message: "Select Your working section not others", success: false });
        }
        console.log("success login")
        // const userid = user._id
        // console.log(user._id)
        const token = jwt.sign({id : user._id} , process.env.JWT_SECRET , {expiresIn:'1d'})
        res.cookie("token",token)
        res.status(201).send({user,message:"Login Success" , success:true , tok:token})

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ message: `Error in Login CTRL ${error.message} ` });
    }
}

module.exports = { loginController };