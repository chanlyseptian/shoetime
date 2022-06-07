const { Router } = require("express");
const userRoute = Router();

const { userController } = require("../controllers");
const { authentication } = require("../middlewares/auth");

userRoute.get("/", userController.getUser);
userRoute.post("/create", userController.create);
userRoute.post("/login", userController.login);
userRoute.post("/admin", userController.admin);

userRoute.delete("/delete/:id", userController.delete);
userRoute.put("/update", authentication, userController.update);

module.exports = userRoute;
