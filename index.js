const mustache = require('mustache')
const moment = require('moment')
const { argv } = require('yargs')
const fs = require('fs')
const path = require('path')

const view = { 
    filename: argv._[0],
    date: moment().format('MMMM Do, YYYY') 
}

const readInput = name => fs.readFileSync(path.resolve(__dirname, name)).toString('utf8')
const writeOutput = (name, data) => fs.writeFileSync(path.resolve(process.cwd(), name), data)

if (view.filename) {
    const mdfile   = readInput('filename.md.mustache')
    const makefile = readInput('Makefile.mustache')
    
    console.log(mdfile)
    
    writeOutput(`${view.filename}.md`, mustache.render(mdfile, view))
    writeOutput(`Makefile`,       mustache.render(makefile, view))
} else {
    console.log('Usage: make-pandoc-md [filename]')
    console.log('    NOTE: [filename] should not contain extensions')
}


