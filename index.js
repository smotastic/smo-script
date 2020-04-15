#!/usr/bin/env node

require('dotenv').config()
require('colors');
const { program } = require('commander');

const commands = require('./commands');

const getCurrentDate = require('./modules/currentDate');

program.version('0.1.0')

program
    .command('diff')
    .option("-t, --to [value]", "The Branch to compare to", "HEAD")
    .option("-f, --from [value]", "The Branch to compare from", process.env.BASE_FROM)
    .action(({ to, from }) => commands.diff(to, from))


program
    .command('log')
    .option("-b, --branch [value]", "The Branch to show the log of, defaults to current Branch", "HEAD")
    .action(({ branch }) => commands.gitlog(branch))

program
    .command('exp')
    .option("-c, --connection [value]", "The connection of whom the Dump should be exported, defaults to $DB_SCHEMA_NAME/$DB_SCHEMA_PASS@$DB_HOST:$DB_PORT/$DB_SERVICENAME",
        `${process.env.DB_SCHEMA_NAME}/${process.env.DB_SCHEMA_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICENAME}`)
    .option("-n, --dumpname [value]", "The name of the exporting Dump, defaults to $DB_SCHEME_NAME_{current_date(YYYY_MM_DD}}",
        `${process.env.DB_SCHEMA_NAME}_${getCurrentDate()}`)
    .action(({ connection, dumpname }) => commands.exp(connection, dumpname))

program.parse(process.argv);


