const bcryptjs = require("bcryptjs");
const validateUserInput = (email, password) => {
  return email && password;
}
const comparePasswords = (password, hashedPassword) => {
  return bcryptjs.compareSync(password, hashedPassword)
}

module.exports = {
  validateUserInput,
  comparePasswords
};
