#!/usr/bin/env node

const oneFile = require('fs');

const path = process.argv[2];
oneFile.readFile(path, 'utf-8', (err, data) => {
    if (err) console.error(err);
    else console.log(data);
});