require('dotenv').config()

const S1 = require('./models/server')
const server = new S1();
server.listen();
//server.listen(process.env.PORT)