const User = require("../model/userSchema");

const getUsers = async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};
const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  console.log(newUser);
  try {
    await newUser.save();
    console.log("Data inserted");
    res.json({ user: newUser });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
};

const getUsersById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

const editUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);
  console.log(newUser);
  try {
    await User.updateOne({ _id: req.params.id }, newUser);
    console.log("Data updated");
    res.json({ user: newUser });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.send("user deleted");
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
};

module.exports = { getUsers, addUser, getUsersById, editUser, deleteUser };
