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

//Select Department 
function chooseDepartment() {
    var sqlStart = "SELECT * FROM department";
    connection.query(sqlStart, function (err, result) {
        if (err) throw err;
        console.table(result)
        //Run the search 
        startApp();
    })
}
//Select Employee
function chooseEmployee() {
    var sqlStart = "SELECT first_name, last_name, title, salary FROM employee ";
    sqlStart += "LEFT JOIN role ";
    sqlStart += "ON employee.role_id = role.id"
    connection.query(sqlStart, function (err, result) {
        if (err) throw err;
        console.table(result)
        //Run the search 
        startApp();
    })
}
//Select Role 
function chooseRole() {
    var sqlStart = "SELECT * FROM role";
    connection.query(sqlStart, function (err, result) {
        if (err) throw err;
        console.table(result)
        //Run the search 
        startApp();
    })
}
//Update Employee
const updateEmployee = () => {
    function runUpdate() {
        inquirer
            .prompt({
                name: "action",
                type: "list",
                message: "Choose employee to update",
                choices: employeeOptions
            })     
    }
    //Run the update
    runUpdate();  
}
