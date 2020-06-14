$(document).ready(function () {
  var arrayOfHours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  var currentTime = moment().format("h A");


  // var hourIndex = 0;

  // var currentHour = moment().format(HH);

  // Populate a row for each hour, then set up three columns in each row
  // the first column should be a class of "col-sm-1" and contain an hour
  // the second column should be a class of "col-sm-10" and contain a input text area
  // the third column should be a class of "col-sm-1" and have a button that will save the text on local storage



  for (var i = 0; i < arrayOfHours.length; i++) {
    console.log(arrayOfHours[i]);
    // var currentHour = moment().format("HHmm")
    var hourList = arrayOfHours[i];
    var timeTableRows = $("<div class='row form-group hour-rows'>");
    var hourEl = $("<div class='col-sm-1'>");
    var textEl = $("<textarea class='col-sm-10 time-sensitive form-control'>");
    var saveEl = $("<button type='button' class='col-sm-1 btn btn-info i fas fa-lock'>");
    hourEl.text(hourList);
    timeTableRows.append(hourEl).append(textEl).append(saveEl);
    $("#time-table").append(timeTableRows);

    if (hourList.match(currentTime)) {
      $(".time-sensitive").attr("style", "background-color: red");
    }
  }

  $(".btn").on("click", function() {
    console.log("You clicked my button!");
  });



  var maybe = moment().isAfter(hourList);
  console.log(maybe);
    // If a row of time is after the current time in the time-table, it should turn green 
    // Look at calculator example

  // if(moment().isAfter(hourList) === true ) {
  //   $(".time-sensitive").attr('style',  'background-color:green');
  // }
});

// Apply moment attributes to each hour
// Make the rows change color based off which hour it is

// var currentHourTime = moment().format(HH);

//   if (moment().format(HH) === true) {
//     $(".time-sensitive").attr("style", "background-color: red");
//   }


var currentTime = moment().format("dddd Do MMMM YYYY");

// console.log(currentTime);

$("#currentDay").text(currentTime);

var milTime = moment().format("HHA");
console.log(milTime);