const express = require("express")
const { authmiddle } = require("../middlewares/authmiddleware")
const { registerController } = require("../controller/Userscontroller/Registercontroller");
const { loginController } = require("../controller/Userscontroller/Logincontroller");

const userRouter = express.Router()


userRouter.post("/register",registerController);

userRouter.post("/login", loginController)


module.exports = userRouter