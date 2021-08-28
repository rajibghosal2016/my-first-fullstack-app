const express = require("express");
const route = express.Router();
const {
  getUsers,
  addUser,
  getUsersById,
  editUser,
  deleteUser,
} = require("../controller/user-controller");

route.get("/", getUsers);
route.post("/add", addUser);
route.get("/:id", getUsersById);
route.put("/:id", editUser);
route.delete("/:id", deleteUser);

module.exports = route;
