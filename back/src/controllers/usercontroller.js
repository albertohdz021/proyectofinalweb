const User=require('../Models/UserModel');


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    handleError(error, res);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json(newUser); 
  } catch (error) {
    if (error.code === 11000) { 
      res.status(400).json({ message: 'User already exists' });
    } else {
      handleError(error, res);
    }
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User deleted' });
      console.log(user.title +"ha sido eliminada")
    }
  } catch (error) {
    handleError(error, res);
  }
};

// Global error handling
function handleError(error, res) {
  console.error(error); // Log the error for debugging
  res.status(500).json({ message: 'Something went wrong' });
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
