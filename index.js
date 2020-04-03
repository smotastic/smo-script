#!/usr/bin/env node

require('dotenv').config()
require('colors');
const { program } = require('commander');

const commands = require('./commands');

program.version('0.1.0')

program
    .command('diff')
    .option("-t, --to [value]", "The Branch to compare to", "HEAD")
    .option("-f, --from [value]", "The Branch to compare from", process.env.BASE_FROM)
    .action(({ to, from }) => commands.diff(to, from))


program
    .command('log')
    .action(commands.gitlog)

program.parse(process.argv);