#!/usr/bin/node

const oneFile = require('fs');

const path = process.argv[2];
const insertText = process.argv[3];

oneFile.readFile(path, insertText, 'utf-8', (err) => {
    if (err) console.error(err);
});
