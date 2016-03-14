require('dotenv').load();
module.exports = {
  development: 'mongodb://localhost/todo',
  production: process.env.DATABASE_URL
}
