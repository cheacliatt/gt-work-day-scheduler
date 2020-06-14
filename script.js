$(document).ready(function () {
  var arrayOfHours = [
    "0000",
    "0100",
    "0200",
    "0300",
    "0400",
    "0500",
    "0600",
    "0700",
    "0800",
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
    "1800",
    "1900",
    "2000",
    "2100",
    "2200",
    "2300",
    "2400",
  ];

  // var hourIndex = 0;

  // Populate a row for each hour, then set up three columns in each row
  // the first column should be a class of "col-sm-1" and contain an hour
  // the second column should be a class of "col-sm-10" and contain a input text area
  // the third column should be a class of "col-sm-1" and have a button that will save the text on local storage

  for (var i = 0; i < arrayOfHours.length; i++) {
    console.log(arrayOfHours[i]);
    var hourList = arrayOfHours[i];
    var timeTableRows = $("<div class='row form-group hourRows'>");
    var hourEl = $("<div class='col-sm-1'>");
    var textEl = $("<textarea class='col-sm-10 form-control'>");
    var saveEl = $("<button type='button' class='col-sm-1 btn btn-info'>");
    hourEl.text(hourList);
    timeTableRows.append(hourEl);
    timeTableRows.append(textEl);
    timeTableRows.append(saveEl);
    $("#time-table").append(timeTableRows);
  }
});

// var currentTime = moment();
// console.log(currentTime);
