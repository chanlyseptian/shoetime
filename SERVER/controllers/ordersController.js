const { tokenVerifier } = require("../helper/jsonwebtoken");
const { order, line_items, products, user } = require("../models");

class ordersController {
  static async getOrders(req, res) {
    try {
      let result = await order.findAll({
        include: [user],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async create(req, res) {
    try {
      const {
        orderCreated_on,
        orderSubtotal,
        orderDiscount,
        orderTax,
        orderTotalDue,
        orderTotalQty,
        orderPaytTrxNumber,
        orderCity,
        orderStatus,
        orderAddress,
      } = req.body;

      const userId = req.userData.id;

      let result = await order.create({
        orderCreated_on,
        orderSubtotal,
        orderDiscount,
        orderTax,
        orderTotalDue,
        orderTotalQty,
        orderPaytTrxNumber,
        orderCity,
        orderStatus,
        orderAddress,
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
      let result = await order.destroy({
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
        orderCreated_on,
        orderSubtotal,
        orderDiscount,
        orderTax,
        orderTotalDue,
        orderTotalQty,
        orderPaytTrxNumber,
        orderCity,
        orderStatus,
        orderAddres,
      } = req.body;

      const id = +req.params.id;
      // console.log(req.body)
      // console.log(req.userData.id)

      let result = order.update(
        {
          orderCreated_on,
          orderSubtotal,
          orderDiscount,
          orderTax,
          orderTotalDue,
          orderTotalQty,
          orderPaytTrxNumber,
          orderCity,
          orderStatus,
          orderAddres,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({ message: `user has been updated` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = ordersController;
