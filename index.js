#! /usr/bin/env node
const mustache = require('mustache')
const moment = require('moment')
const { argv } = require('yargs')
const fs = require('fs')
const path = require('path')

const showUsage = () => {
    console.log('Usage:')
    console.log('    mdmake [filename] [options]')
    console.log('    NOTE: [filename] should not contain extensions')
    console.log('Options:')
    console.log('    --author, -a "author name"')
}

const view = { 
    filename: argv._[0],
    author: argv.author || argv.a || 'Tobias Bergkvist', 
    date: moment().format('MMMM Do, YYYY')
}

const readInput = name => fs.readFileSync(path.resolve(__dirname, name)).toString('utf8')
const writeOutput = (name, data) => fs.writeFileSync(path.resolve(process.cwd(), name), data)

try {
    if (argv.a && argv.author) throw new Error('You cannot use both -a and --author together')
    if (!view.filename)        throw new Error('You must supply a filename')
} catch (error) {
    console.log(`Error: ${error.message}\n`)
    showUsage()
    process.exit(1)
}

const mdfile   = readInput('filename.md.mustache')
const makefile = readInput('Makefile.mustache')

writeOutput(`${view.filename}.md`, mustache.render(mdfile, view))
writeOutput(`Makefile`,            mustache.render(makefile, view))

console.log(`Successfully created files: 'Makefile', '${view.filename}.md' in current folder.`)
