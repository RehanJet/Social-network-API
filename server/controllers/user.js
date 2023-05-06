const { User } = require('../models');
module.exports = {
  async getAllUsers({}, res) { 
    const allUsers = await User.find({});
    
    if (!allUsers) {
      return res.status(400).json({ message: 'Cannot find any users!' });
    }

    res.status(200).json(allUsers);
  },

  async getUser({ params }, res) {
    const foundUser = await User.findOne({_id: params.id});

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },


  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
  
    res.json({ user });
  },

  async updateUser({ params, body }, res) { 
    const user = await User.findByIdAndUpdate(params.id, body);
    
    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    
    return res.json(user);
  },

  async deleteUser({ params }, res) {
    const user = await User.findByIdAndDelete(params.id);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }

    return res.json({message: 'User deleted!'});  
  }

};
