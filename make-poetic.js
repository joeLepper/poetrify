'use strict'
const args = require('yargs').argv
const path = require('path')

let corpus
try {
  const corpusPath = path.join(process.cwd(), args.c)
  corpus = require(corpusPath)
}
catch (e) { corpus = require('./corpus') }

const getWord = () => corpus.splice(Math.floor(Math.random() * corpus.length), 1)
const makePoetic = (out, dVal) => out.replace(new RegExp(dVal, 'g'), getWord())

module.exports = makePoetic
