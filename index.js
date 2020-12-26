/* Your Code Here */
function createEmployeeRecord(arr){
  let ob = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
  }
  return ob
}
function createEmployeeRecords(EmployeesArr){
 return EmployeesArr.map((element)=>{
     return createEmployeeRecord(element);
  })
}


 function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

 function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

 function hoursWorkedOnDate(date){
    let timeIn  = this.timeInEvents.find((e) => e.date === date)

    let timeOut = this.timeOutEvents.find((e) => e.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
 let rawWage = hoursWorkedOnDate.call(this,date)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

function allWagesFor(employee){
  let dates= this.timeInEvents.map(function(e){
        return e.date
    })
    
    let payable = dates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this,d)
    }.bind(this), 0)

    return payable
}



let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
