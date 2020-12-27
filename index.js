/* Your Code Here */
function createEmployeeRecord(array){
  return{
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
  }
}
function createEmployeeRecords(array){
  return array.map(elem => createEmployeeRecord(elem))
}
function createTimeInEvent(dateS){
  let [date, hour] = dateS.split(' ');
  this.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(hour, 10),
    date ,
  })
  return this
}

function createTimeOutEvent(dateS){
  let [date, hour] = dateS.split(' ');
  this.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(hour, 10),
    date ,
  })
  return this
}

function hoursWorkedOnDate(dateWork){
  let inEvents = this.timeInEvents.find(e => e.date === dateWork)
  let outEvents = this.timeOutEvents.find(e => e.date === dateWork)
  return (outEvents.hour - inEvents.hour) / 100
}

function wagesEarnedOnDate(date){
  let wage = hoursWorkedOnDate.call(this, date)* this.payPerHour
  return parseFloat(wage.toString())
}

function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(array){
  return array.reduce((acc,curr) => acc + allWagesFor.call(curr),0)
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
