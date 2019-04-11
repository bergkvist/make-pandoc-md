#! /usr/bin/env node
const mustache = require('mustache')
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const { argv } = require('yargs')
    .usage('$0 <project-name> [options]', '', yargs => {
        yargs.positional('<project-name>', {
            describe: 'Will be used for naming the markdown/pdf files',
            type: 'string'
        })
    })
    .option('author', {
        alias: 'a',
        describe: 'project author',
        default: 'Tobias Bergkvist'
    })

const data = {
    filename: argv['project-name'],
    author: argv.author, 
    date: moment().format('MMMM Do, YYYY')
}

const readInput = name => fs.readFileSync(path.resolve(__dirname, name)).toString('utf8')
const writeOutput = (name, template, data) => fs.writeFileSync(path.resolve(process.cwd(), name), mustache.render(template, data))
const createFileFromTemplate = data => ({ output, input }) => writeOutput(output, readInput(input), data)

createFileFromTemplate (data) ({ output: `${data.filename}.md`, input: `filename.md.mustache` })
createFileFromTemplate (data) ({ output: `Makefile`           , input: `Makefile.mustache`    })

console.log(`Successfully created files (in this folder): \n * Makefile \n * ${data.filename}.md`)
