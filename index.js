/* Your Code Here */

function createEmployeeRecord (array){
  let employeeRecord ={
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
  }
  return employeeRecord;
}

function createEmployeeRecords (array){
  let employeesRecord = [];
  for(let arr of array){
 employeesRecord.push(createEmployeeRecord (arr));
  }
  return employeesRecord;
}

function createTimeInEvent(date1){
  let [dates, hour] = date1.split(' ')
   this.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(hour, 10),
    date : dates,
  });
   return this
}

function createTimeOutEvent(date1){
  let [dates, hour] = date1.split(' ')
  this.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(hour, 10),
    date : dates,
  });
  return this
}

function hoursWorkedOnDate(date1){
  let hoursWorked = 0;
  let timeIn= this.timeInEvents.find( (e) => e.date === date1)
  let timeOut= this.timeOutEvents.find( (e) => e.date === date1)
   hoursWorked = (timeOut.hour - timeIn.hour)/100;  
  return hoursWorked;
}

function wagesEarnedOnDate(date){
  let payOwed = 0;
  
  payOwed = hoursWorkedOnDate.call(this,date)* this.payPerHour;
  return parseFloat (payOwed.toString());
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function findEmployeeByFirstName(srcArray, firstName){
  for(let empl of srcArray){
    if(empl.firstName === firstName) return empl;
    else return undefined
  }
}
function calculatePayroll(array){
  
    return array.reduce(function(acc, el){
        return acc + allWagesFor.call(el)
    }, 0)
}
