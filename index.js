#! /usr/bin/env node
'use strict'
const esprima = require('esprima')
const fs = require('fs')
const args = require('yargs').argv
const path = require('path')
const traverse = require('./traverse')
const makePoetic = require('./make-poetic')

const inPath = args.i || args._[0]
const outPath = args.o || './poetic.js'

let code
try {
  code = fs.readFileSync(path.join(process.cwd(), inPath), 'utf8')
} catch (e) {
  throw new Error('invalid input file specified')
}

const ast = esprima.parse(code)
const declaratorVals = []

let out = code

traverse(ast, (node) => {
  if (node.type === 'VariableDeclarator') declaratorVals.push(node.id.name)
})

declaratorVals.forEach((dVal) => out = makePoetic(out, dVal))

try {
  fs.writeFileSync(path.join(process.cwd(), outPath), out)
} catch (e) {
  throw new Error('invalid output file specified')
}
