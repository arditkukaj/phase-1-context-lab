/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


 function createEmployeeRecord(employeeArray) {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
}

  function createEmployeeRecords(array){
    return array.map(record => createEmployeeRecord(record));
}

  function createTimeInEvent(date) {
    const dateArray = date.split(' ')
    const newTimeInEvent = {
      type: "TimeIn",
      hour: parseInt(dateArray[1]),
      date: dateArray[0]
    }
    this.timeInEvents.push(newTimeInEvent)
    return this
  }

  function createTimeOutEvent(date) {
    const dateArray = date.split(' ')
    const newTimeOutEvent = {
      type: "TimeOut",
      hour: parseInt(dateArray[1]),
      date: dateArray[0]
    }
    this.timeOutEvents.push(newTimeOutEvent)
    return this
  }

  function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100;
}
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour)/100;
  }
  
  function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }
  
  function calculatePayroll(empRecords) {
    const totalForEachEmployee = empRecords.map(record => allWagesFor.call(record))
    return totalForEachEmployee.reduce((total, empTotal) => total + empTotal)
  }
  
  function findEmployeeByFirstName(src, name) {
    return src.find(record => record.firstName === name);
  }