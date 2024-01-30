// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time? **create a currentHour var with dayjs()**

// did some research on this and found https://stackoverflow.com/questions/4676562/jquery-adding-and-removing-class-dynamically
//https://day.js.org/docs/en/get-set/hour
$(document).ready(function () {
  updateTimeBlocks();
  setInterval(updateTimeBlocks, 60000);

  function updateTimeBlocks() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function (index) {
      var hour = index + 9;

      if (hour < currentHour) {
        $(this).addClass('past').removeClass('present future');
      } else if (hour === currentHour) {
        $(this).addClass('present').removeClass('past future');
      } else if (hour > currentHour) {
        $(this).addClass('future').removeClass('past present');
      }
    });
  }
});

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//still working on this 

// check to see if anything is local storage and display if there is
if (typeof (Storage) !== "undefined") {
  var storedNotes = localStorage.getItem("notes");
  if (storedNotes !== null) {
    $("textarea").val(storedNotes);
  }

  // eventhandler on button to record textarea to local storage
  $("button").on("click", function() {
    var savedNotes = $("textarea").val();
    console.log()
    debugger
    localStorage.setItem("notes", savedNotes);
    alert("Appointment saved to local storage");
  }
  )
};

//
// TODO: Add code to display the current date in the header of the page.
// researched on Jquery.and https://day.js.org/en/
// added time
$(document).ready(function () {
  var currentDay = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  $("#currentDay").text(currentDay);
});


