$(document).ready(function () {
  var arrayOfHours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  var currentTime = moment().format("hA");
  var currentTimeIndex = arrayOfHours.indexOf(currentTime);

  var currentTimeHeader = moment().format("dddd Do MMMM YYYY");


  $("#currentDay").text(currentTimeHeader);

  // Populate a row for each hour, then set up three columns in each row
  // the first column should be a class of "col-sm-1" and contain an hour
  // the second column should be a class of "col-sm-10" and contain a input text area
  // the third column should be a class of "col-sm-1" and have a button that will save the text on local storage

  for (var i = 0; i < arrayOfHours.length; i++) {
    // console.log(arrayOfHours[i]);
    // var currentHour = moment().format("HHmm")
    var hourList = arrayOfHours[i];
    var timeTableRows = $("<form class='row form-group hour-rows'>");
    var hourEl = $("<div class='col-sm-1 hour-col hour'>");
    var textEl = $("<textarea class='col-sm-10 time-sensitive form-control time-block'>");
    var saveEl = $(
      "<button type='submit' class='col-sm-1 btn btn-info i fas fa-lock saveBtn'>"
    );
    hourEl.text(hourList);
    textEl.attr("id", arrayOfHours[i]);
    timeTableRows.append(hourEl).append(textEl).append(saveEl);
    $("#time-table").append(timeTableRows);

    if (i === currentTimeIndex) {
      $(textEl).addClass("present");
    } else if (i < currentTimeIndex || currentTimeIndex === -1) {
      $(textEl).addClass("past");
    } else {
      $(textEl).addClass("future");
    }
  }



  $(document).on("click", ".btn", function (event) {
    event.preventDefault();
    var textValue = $(this).siblings("textarea").val();
    var textKey = $(this).siblings("textarea").attr("id");
    console.log(textKey, textValue);
    localStorage.setItem(textKey, textValue);
  });
  $("#9AM").val(localStorage.getItem("9AM"));
  $("#10AM").val(localStorage.getItem("10AM"));
  $("#11AM").val(localStorage.getItem("11AM"));
  $("#12PM").val(localStorage.getItem("12PM"));
  $("#1PM").val(localStorage.getItem("1PM"));
  $("#2PM").val(localStorage.getItem("2PM"));
  $("#3PM").val(localStorage.getItem("3PM"));
  $("#4PM").val(localStorage.getItem("4PM"));
  $("#5PM").val(localStorage.getItem("5PM"));

});

// if(document.getElementById("field").value == '')
// {
//     alert("debug");
//     document.getElementById("field").style.display ="none";
// }
