const execScript = require('../../modules/execScript');

const diff = (to, from) => {
    console.log(`Comparing ${to} ... ${from}`.green);

    const state = execScript(__dirname, "diff.sh", [from, to]);
    state.then(console.log).catch(console.log);
}

module.exports = diff;