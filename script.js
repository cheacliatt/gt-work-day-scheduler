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

  var emptyBox = [];

  var currentTime = moment().format("h A");

  // Populate a row for each hour, then set up three columns in each row
  // the first column should be a class of "col-sm-1" and contain an hour
  // the second column should be a class of "col-sm-10" and contain a input text area
  // the third column should be a class of "col-sm-1" and have a button that will save the text on local storage



  for (var i = 0; i < arrayOfHours.length; i++) {
    console.log(arrayOfHours[i]);
    // var currentHour = moment().format("HHmm")
    var hourList = arrayOfHours[i];
    var timeTableRows = $("<div class='row form-group hour-rows'>");
    var hourEl = $("<div class='col-sm-1 hour-col'>");
    var textEl = $("<textarea class='col-sm-10 time-sensitive form-control'>");
    var saveEl = $("<button type='submit' class='col-sm-1 btn btn-info i fas fa-lock'>");
    hourEl.text(hourList);
    timeTableRows.append(hourEl).append(textEl).append(saveEl);
    $("#time-table").append(timeTableRows);

    if (hourList.match(currentTime)) {
      $(textEl).addClass("present");
    } else if (hourList < currentTime) {
      $(textEl).addClass("past");
    } else {
      $(textEl).addClass("future");
    }
  };

  $(".btn").on("click", function(event) {
    var entryEl = $(".time-sensitive").val();
    emptyBox.push(entryEl);
    console.log(entryEl);
    event.preventDefault();

    if (emptyBox.length > 0) {
      console.log("You submitted the form.")
    }
  });

});


// if(document.getElementById("field").value == '')
// {
//     alert("debug");
//     document.getElementById("field").style.display ="none";
// }


var currentTime = moment().format("dddd Do MMMM YYYY");

// console.log(currentTime);

$("#currentDay").text(currentTime);