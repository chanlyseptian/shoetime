const { Router } = require("express");
const productRoute = Router();
const { productsController } = require("../controllers");
const { authentication } = require("../middlewares/auth");

productRoute.get("/", productsController.getProducts);
productRoute.post("/create", authentication, productsController.create);
productRoute.delete("/delete/:id", productsController.delete);
productRoute.put("/update/:id", productsController.update);

module.exports = productRoute;
