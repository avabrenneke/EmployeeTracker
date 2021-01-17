// Dependencies 
var inquirer = require("inquirer");
var connection = require('./connection');

//Table Choices
const tableOptions = [
    "Departments",
    "Roles",
    "Employees",
    "Update Employee",
    "Add Department",
    "Add Employee",
    "Add Role",
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
const updateOptions = [
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
                    break;

                case tableOptions[4]:
                    addDepartment();
                    break;

                case tableOptions[5]:
                    addEmployee();
                    break;
                
                case tableOptions[6]:
                    addRole();
                    break;

                case updateOptions[7]:
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
            .prompt([
            {
                name: "action",
                type: "list",
                message: "Choose employee to update",
                choices: employeeOptions
            },
            {
                name: "change",
                type: "list",
                message: "Update Role",
                choices: tableOptions
            }
        ])   
    }
    //Run the update
    runUpdate();  
}

function addDepartment() {


    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"

    }).then(function(answer){



        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startApp();
    })
    })
}

function addEmployee() {


    inquirer.prompt({
      
        type: "input",
        message: "Who is the employee?",
        name: "employeeName"

    }).then(function(answer){



        connection.query("INSERT INTO employee (name) VALUES (?)", [answer.employeeName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startApp();
    })
    })
}

function addRole() {


    inquirer.prompt({
      
        type: "input",
        message: "What is the role?",
        name: "roleName"

    }).then(function(answer){



        connection.query("INSERT INTO role (name) VALUES (?)", [answer.roleName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startApp();
    })
    })
}
