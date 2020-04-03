const execScript = require('../../modules/execScript');

const log = (from, to) => {
    console.log(`Starting log in ${process.env.SMO_HOME}`.green);
    execScript(__dirname, "log.sh");
}

module.exports = log;