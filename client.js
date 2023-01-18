// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! /tdeak the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(onReady);

function onReady() {
  $("#start").click(onClick);
}

function onClick() {
  let table = $("#boxes");
  table.empty();
  for (let employee of employees) {
    let salary = `$` + (new Intl.NumberFormat('en-US').format(employee.annualSalary))
    let bonus = calculateIndividualEmployeeBonus(employee);
    let bonusFormat = `$` + (new Intl.NumberFormat('en-US').format(bonus));

    let totalComp = `$` + (new Intl.NumberFormat('en-US').format(Number (employee.annualSalary) + bonus));
    table.append(`<tr><td>${employee.name}</td>
    <td>${employee.reviewRating}</td>
    <td>${salary}</td>
    <td>${bonusFormat}</td>
    <td>${totalComp}</td></tr>`);
  }
}



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonusPercentage = 0;

  switch (employee.reviewRating) {
    case 3:
      bonusPercentage += .04;
      break;
    case 4:
      bonusPercentage += .06;
      break;
    case 5:
      bonusPercentage += .1;
      break;
    
  }

  if (employee.employeeNumber.length === 4) {
    bonusPercentage += .05;
  }
  
  if (employee.annualSalary > 650000) {
    bonusPercentage -= .01;
  }

  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  }

  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let bonus = Math.round(employee.annualSalary * bonusPercentage);


  // return new object with bonus results
  return bonus;
}