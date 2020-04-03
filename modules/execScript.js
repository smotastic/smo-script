const { execFile } = require('child_process');

const execScript = (dir, scriptName, args = []) => {
    return new Promise((resolve, reject) => {
        const bat = execFile(scriptName, args, { cwd: dir, shell: true });
        bat.stdout.on('data', (data) => {
            resolve(data);
        });

        bat.stderr.on('data', (data) => {
            reject(data);
        });

        bat.on('exit', (code) => {
            console.log(`Process exited with code ${code}`);
        });
    })
}

module.exports = execScript;
