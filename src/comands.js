const { addUser, findUser } = require("../index");
const program = require("commander");
program
    .version("1.0.0")
    .description("CLI for Databases");

program.parse(process.argv);