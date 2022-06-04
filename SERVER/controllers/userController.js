// const bcrypt = require('bcrypt')
const { decryptPassword } = require("../helper/bcrypt");
const { user, order } = require("../models");
const { tokenGenerator, tokenVerifier } = require("../helper/jsonwebtoken");

class userController {
  static async getUser(req, res) {
    try {
      const users = await user.findAll({
        // include: [order],
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const {
        userName,
        userEmail,
        userPassword,
        userSalt,
        userBirthdate,
        userGender,
        userAvatar,
        userType,
      } = req.body;

      let result = await user.create({
        userName,
        userEmail,
        userPassword,
        userSalt,
        userBirthdate,
        userGender,
        userAvatar,
        userType,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async login(req, res) {
    try {
      const { userEmail, userPassword } = req.body;

      let foundEmail = await user.findOne({
        where: { userEmail },
      });
      if (foundEmail) {
        if (decryptPassword(userPassword, foundEmail.userPassword)) {
          let access_token = tokenGenerator(foundEmail);
          res.status(200).json({ access_token });

          let verifyToken = tokenVerifier(access_token);
          console.log(verifyToken);
        } else {
          res.status(404).json({
            message: "password not found",
          });
        }
      } else {
        res.status(404).json(err);
      }
    } catch (err) {
      res.status(404).json({
        message: "email not found",
      });
    }
  }

  static async admin(req, res) {
    try {
      const { userType, userPassword } = req.body;

      let foundType = await user.findOne({
        where: { userType },
      });
      if (foundType) {
        if (decryptPassword(userPassword, foundType.userPassword)) {
          let access_token = tokenGenerator(foundType);

          res.status(200).json( foundType );

          let verifyToken = tokenVerifier(access_token);
          console.log(verifyToken);
        } else {
          res.status(404).json({
            message: "password not found",
          });
        }
      } else {
        res.status(404).json(err);
      }
    } catch (err) {
      res.status(404).json({
        message: "Type not found",
      });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({
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
        userName,
        userEmail,
        userPassword,
        userSalt,
        userBirthdate,
        userGender,
        userAvatar,
        userType,
      } = req.body;

      const id = +req.userData.id;
      // const hashPwd = bcrypt.hashSync(user_password,5)

      let result = await user.update(
        {
          userName,
          userEmail,
          userPassword,
          userSalt,
          userBirthdate,
          userGender,
          userAvatar,
          userType,
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      result[0] === 1
        ? res.status(200).json({ message: `user has been updated` })
        : res.status(404).json({ message: `id is not right` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = userController;
