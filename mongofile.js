require('dotenv').load();
module.exports = {
  development: 'mongodb://localhost/test',
  production: process.env.DATABASE_URL
}
