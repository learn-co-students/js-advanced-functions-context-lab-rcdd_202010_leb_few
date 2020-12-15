/* Your Code Here */

function createEmployeeRecord(array){
 let list={
    firstName:array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  return list;
}
      
function createEmployeeRecords(array){
let arr=array.map(element=>createEmployeeRecord(element));
return arr;
  }
  
function createTimeInEvent(time){
  let a=time.split(" ");
  let object={};
    object.type="TimeIn";
    object.hour=parseInt(a[1]);
    object.date=a[0];
  this.timeInEvents.push(object);
  return this;
}

function createTimeOutEvent(time){
  let a=time.split(" ");
    let object={};
    object.type="TimeOut";
    object.hour=parseInt(a[1]);
    object.date=a[0];
  this.timeOutEvents.push(object);
  return this;
}

function hoursWorkedOnDate (time){
    let inDate = this.timeInEvents.find(function(i){
        return i.date === time;
    })
    let outDate = this.timeOutEvents.find(function(i){
        return i.date === time;
    })
    return (outDate.hour - inDate.hour) / 100;
}

  function findEmployeeByFirstName(array,name){
  let result = array.find((element) => element.firstName===name);
  return result?result:undefined;
  }
  
  function wagesEarnedOnDate(time){
  return parseInt(this.payPerHour)*hoursWorkedOnDate.call(this,time);
  }
  
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
  
function calculatePayroll (array){
 let grandTotalOwed = array.reduce((m, e) => m + allWagesFor.call(e), 0);
 return grandTotalOwed;
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 
 
