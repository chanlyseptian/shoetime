const { lineItem } = require("../models");

class line_itemsController {
  static async getLine_items(req, res) {
    try {
      let result = await lineItem.findAll({
        attributes: {
          include: ["id"],
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { lineQty, lineStatus, productId, shoppingCartId, orderId } =
        req.body;
      let result = await lineItem.create({
        lineQty,
        lineStatus,
        productId,
        shoppingCartId,
        orderId,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await lineItem.destroy({
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
      const { lineQty, lineStatus, productId, shoppingCartId, orderId } =
        req.body;
      const id = req.params.id;
      let result = await lineItem.update(
        {
          lineQty,
          lineStatus,
          productId,
          shoppingCartId,
          orderId,
        },
        { where: { id } }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
}

module.exports = line_itemsController;
