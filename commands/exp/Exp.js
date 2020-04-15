const execScript = require('../../modules/execScript');

const exp = (connection, name) => {
    console.log(connection, name);
    execScript(__dirname, "exp.sh", [connection, name]);
}

module.exports = exp;