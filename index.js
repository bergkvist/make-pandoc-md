#! /usr/bin/env node
const mustache = require('mustache')
const moment = require('moment')
const { argv } = require('yargs')
const fs = require('fs')
const path = require('path')

const view = { 
    filename: argv._[0],
    author: argv.author || argv.a || 'Tobias Bergkist', 
    date: moment().format('MMMM Do, YYYY')
}

const readInput = name => fs.readFileSync(path.resolve(__dirname, name)).toString('utf8')
const writeOutput = (name, data) => fs.writeFileSync(path.resolve(process.cwd(), name), data)

if (view.filename) {
    const mdfile   = readInput('filename.md.mustache')
    const makefile = readInput('Makefile.mustache')

    writeOutput(`${view.filename}.md`, mustache.render(mdfile, view))
    writeOutput(`Makefile`,            mustache.render(makefile, view))

    console.log(`Successfully created files: 'Makefile', '${view.filename}.md' in current folder.`)
} else {
    console.log('Usage: make-pandoc-md [filename]')
    console.log('    NOTE: [filename] should not contain extensions')
}