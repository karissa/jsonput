#!/usr/bin/env node

/*
  jsonput venues.json "Bloomsbury Coffee House Wireless":"4e95b2e2b8f73812d09ba1f0"
*/
var fs = require('fs')
var concat = require('concat-stream')
var file = process.argv[1]
var keys = process.argv[2]

if (file === '-') {
  var input = process.stdin
  var writer = process.stdout
} else {
  var input = fs.createReadStream(file)
  var writer = fs.createWriteStream(file)
}

input.pipe(concat(function (buf) {
  try {
    var json = JSON.parse(buf || "{}")
  } catch (e) {
    console.error('Invalid JSON')
    console.trace(e)
    process.exit(1)
  }

  var parts = keys.split(':')
  json[parts[0]] = JSON.parse(parts[1])

  writer.write(JSON.stringify(json))
}))