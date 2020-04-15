const execScript = require('../../modules/execScript');

const log = (branch) => {
    console.log(`Starting log in ${process.env.SMO_HOME}`.green);
    execScript(__dirname, "log.sh", [branch]);
}

module.exports = log;