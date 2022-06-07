const { shoppingCart } = require("../models");

class shopping_cartController {
  static async getShopping_cart(req, res) {
    try {
      let result = await shoppingCart.findAll({});
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { shopCreatedOn, shopStatus } = req.body;
      const userId = +req.userData.id;

      let result = await shoppingCart.create({
        shopCreatedOn,
        shopStatus,
        userId,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await shoppingCart.destroy({
        where: { id },
      });

      result === 1
        ? res.json({
            message: `id ${id} has been deleted`,
          })
        : res.json({
            message: `id ${id} not deleted`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async update(req, res) {
    try {
      const { shopCreatedOn, shopStatus } = req.body;
      const userId = req.userData.id;

      let result = await shoppingCart.update(
        {
          shopCreatedOn,
          shopStatus,
          userId,
        },
        {
          where: { userId },
        }
      );
      result[0] === 1
        ? res.status(200).json({ message: `shopping cart has been updated` })
        : res.status(404).json({ message: `id is not right` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = shopping_cartController;
