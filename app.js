// Dependencies 
var inquirer = require("inquirer");
var connection = require('./connection');

//Table Choices
const tableOptions = [
    "Departments",
    "Roles",
    "Employees",
    "Update Employee",
    "exit"
];
//Employee List
const employeeOptions = [
    "Ava Brenneke",
    "Omar Teach",
    "Matt Subteach",
    "Peter Parker",
    "Chris Brown",
    "Post Malone",
    "exit"
];
//Table Options
const tableOptions = [
    "First Name",
    "Last Name",
    "Role",
    "exit"
];
//Run the Application
startApp();

//Application Function
function startApp() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Choose an option",
            choices: tableOptions
        })
        .then(function (answer) {
            switch (answer.action) {
                case tableOptions[0]:
                    chooseDepartment();
                    break;

                case tableOptions[1]:
                    chooseRole();
                    break;

                case tableOptions[2]:
                    chooseEmployee();
                    break;

                case tableOptions[3]:
                    updateEmployee();

                case tableOptions[4]:
                    connection.end();
                    break
            }
        })
}
