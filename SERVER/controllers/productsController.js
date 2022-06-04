const { product, orders, line_items } = require("../models");

class productsController {
  static async getProducts(req, res) {
    try {
      let result = await product.findAll({});
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async create(req, res) {
    try {
      const {
        prodName,
        prodDesc,
        prodPrice,
        prodStock,
        prodExpire,
        prodWeight,
        prodCategory,
        prodBrand,
        prodCondition,
        prodTotalSold,
        prodRating,
        prodViews,
      } = req.body;

      const userId = +req.userData.id;
      let result = await product.create({
        prodName,
        prodDesc,
        prodPrice,
        prodStock,
        prodExpire,
        prodWeight,
        prodCategory,
        prodBrand,
        prodCondition,
        prodTotalSold,
        prodRating,
        prodViews,
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
      let result = await product.destroy({
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
      const {
        prodName,
        prodDesc,
        prodPrice,
        prodStock,
        prodExpire,
        prodWeight,
        prodCategory,
        prodBrand,
        prodCondition,
        prodTotalSold,
        prodRating,
        prodViews,
      } = req.body;

      const id = +req.params.id;
      console.log(id);

      let result = await product.update({
        prodName,
        prodDesc,
        prodPrice,
        prodStock,
        prodExpire,
        prodWeight,
        prodCategory,
        prodBrand,
        prodCondition,
        prodTotalSold,
        prodRating,
        prodViews,
      },
       {
          where: { id: id },
        }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
}
module.exports = productsController;
