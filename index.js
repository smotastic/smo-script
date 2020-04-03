const { program } = require('commander');
const colors = require('colors');

const commands = require('./commands');

program.version('0.1.0')

program
    .command('rmdir <dir> [otherDirs...]')
    .action(function (dir, otherDirs) {
        console.log('rmdir1 %s', dir);
        if (otherDirs) {
            otherDirs.forEach(function (oDir) {
                console.log('rmdir arr %s'.green, oDir);
            });
        }
    });

program
    .command('diff')
    .option('-d --differ', 'Do a differ', 'hallo')
    .action(() => {
        commands.diff();
    })
console.log(process.env);
program.parse(process.argv);