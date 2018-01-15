#!/usr/bin/env node
var args = process.argv.splice(process.execArgv.length + 2);
var name = args[0] || "MyProject";
var myLibrary = require("../lib/index.js");
myLibrary.create(name);
