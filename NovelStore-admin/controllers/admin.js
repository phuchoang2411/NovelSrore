const { UserModel } = require('../models');

const getAdminList = async (req, res) => {
  const admins = await UserModel.find({ role: 'ADMIN' });
  res.send({ admins });
};

const registerAdmin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    await UserModel.create({ email, password, fullName, role: 'ADMIN' });
    res.redirect(301, '/admin');
  } catch (error) {
    console.log(error.message);
    res.redirect(301, '/admin/register?res=FAILED');
  }
};

module.exports = {
  getAdminList,
  registerAdmin,
};
