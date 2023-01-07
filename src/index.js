
const path = require('path');

const config = require('../../config.json')

config.port = config.konrad.port
config.port_react = config.konrad.port_react
config.session_secret = config.konrad.session_secret
config.fusionauth = config.konrad.fusionauth

const frontend_dir = path.join(__dirname, "..", "..", "SWK_Konrad_React", "build")
const userDataPath = path.join(__dirname, "..", "data", "accounts.json")

var app = require('./SWK_Server_Template/src/main')(config, userDataPath, frontend_dir)


app.listen(config.port);
console.log(`Konrad server started on port ${config.port}`);




