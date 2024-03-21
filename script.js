// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];  // need to declare variable with empty array, now is a global variable
let shouldContinue = true;
// let employees = [ // didn't work as object array?!?
//   {
//     firstName:"",
//     lastName: "",
//     salary: 0
// }
// ]
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  while (shouldContinue) {
    fn = prompt("Enter first name:");
    ln = prompt("Enter last name:");
    sl = prompt("Enter salary:");
    let shouldContinuePrompt = prompt("Would you like to add another employee?");
  
  if(!shouldContinuePrompt) {
  shouldContinue = false;
  }
  employees.push({firstName: fn, lastName: ln, salary: sl})
    // firstName (key), fn (value)
  return employees;
  }
}
// function addNumbers(x, y) {    // TUTOR NOTES EXAMPLE OF BASIC FUNCTION AND MEANING OF PARAMETERS AND PASSING PARAMETERS
//   console.log(x+y)
//   console.log
// }
// addNumbers(12,3)
// will log 15 (because 12 + 3 = 15)

// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  let calcAverage = 0;
  for (let i = 0; i < employeesArray.length; i++) {
  console.log(employeesArray[i].salary);
  calcAverage += parseFloat(employeesArray[i].salary);
 }
 console.log(`The average employee salary between our 3 employees is ${calcAverage / employeesArray.length}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let luckyEmployee = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[luckyEmployee].firstName} ${employeesArray[luckyEmployee].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() { // a function expression with no parameters
  const employees = collectEmployees(); // this is a local variable in a function expression? Is that why it's making error?

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);