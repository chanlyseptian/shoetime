const { Router } = require("express");
const shopping_cartRoute = Router();
const { shopping_cartController } = require("../controllers");
const { authentication } = require("../middlewares/auth");

shopping_cartRoute.get("/", shopping_cartController.getShopping_cart);
shopping_cartRoute.post(
  "/create",
  authentication,
  shopping_cartController.create
);
shopping_cartRoute.delete("/delete/:id", shopping_cartController.delete);
shopping_cartRoute.put(
  "/update",
  authentication,
  shopping_cartController.update
);

module.exports = shopping_cartRoute;
