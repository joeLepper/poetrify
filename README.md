# Poetrify

Tired of writing JavaScript instead of poetry?

## Why yes. Yes I am.

Poetrify is for you.

## You don't say.

I do.

## Great. How does it work?

### Install it.

Globally:
`$ npm i poetrify -g`

Or locally:
`$ npm i poetrify --save-dev`

### Point it at an input file and tell it where to put its masterpiece.

Global installation:
`$ poetrify input-file.js -o=output.js`

Local installation:
`$ ./node_modules/.bin/poetrify input-file.js -o=output.js`

## Cool. But your list of words sucks.

I didn't realize that we were in the presence of genius, Mr. Komunyakaa.

You could always point at your own corpus of words:

Global installation:
`$ poetrify input-file.js -o=output.js -c=talking-dirty-to-the-gods.js`

Local installation:
`$ ./node_modules/.bin/poetrify input-file.js -o=output.js -c=talking-dirty-to-the-gods.js`

## It'd be pretty neat if it did more.

I agree. But I threw it together tonight. Right now it only swaps out `VariableDescriptors` and even does that kind of haphazardly. It'd be neat if it used some of the fancy-dancy esprima-based projects. But it doesn't use anything beyond esprima.

Pull requests welcome.

## Should I use this in production.

No.

