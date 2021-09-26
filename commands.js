#!/usr/bin/env node
const { addUser, findUser, updateUser, removeUser, listUser } = require("./index");
const program = require("commander");
const { prompt } = require("inquirer");

program.version("1.0.0").description("CLI for Databases");

// Add user questions
const questions =[
    {
        type: 'input',
        name: 'firstname',
        message: "Add First name"
    },
    {
        type: 'input',
        name: 'lastname',
        message: "Add last name"
    },
    {
        type: 'input',
        name: 'phone',
        message: "Add phone number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Add email address"
    },
]

// Command to add the user
program
  .command(`a`)
  .alias("add")
  .description("Add new user to the database")
  .action(() => {
      prompt(questions).then(answers => addUser(answers));
  });

// Command to find the user
program
  .command(`f <name>`)
  .alias("find")
  .description("Find the user from the database")
  .action((name) => findUser(name));

// command to update the user data
program
  .command(`u <_id>`)
  .alias("update")
  .description("Update the user in the database")
  .action((_id) => {
    prompt(questions).then(answers => updateUser(_id, answers));
});

// Command to remove the user from the database
program
  .command(`r <_id>`)
  .alias("remove")
  .description("Update the user in the database")
  .action((_id) => removeUser(_id))

// list all users from the database
program
  .command(`ls`)
  .alias("list")
  .description("Update the user in the database")
  .action(() => listUser())

program.parse(process.argv);
