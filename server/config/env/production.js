
//Development configuration options
//To sign the session identifier, use a secret string
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  db: process.env.PROJECT_DB,
  sessionSecret: process.env.SESSION_SECRET,
  secretKey: process.env.SECRET_KEY,
};