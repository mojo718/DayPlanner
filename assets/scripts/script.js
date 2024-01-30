$(document).ready(function () {
  // Function to update time blocks
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

  // Call updateTimeBlocks initially and set interval to update every minute
  updateTimeBlocks();
  setInterval(updateTimeBlocks, 60000);

  // Check for and display stored notes
  $("textarea").each(function () {
    var row = $(this).attr("data-row");
    var storedNotes = localStorage.getItem("notes" + row);
    if (storedNotes !== null) {
      $(this).val(storedNotes);
    }
  });

  // Event handler to save notes to local storage
  $(".saveBtn").on("click", function () {
    var row = $(this).attr("data-row");
    var savedNotes = $(this).siblings(".description").val();
    localStorage.setItem("notes" + row, savedNotes);
    alert("Appointment changes saved to local storage");
  });

  // Display the current date in the header
  var currentDay = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  $("#currentDay").text(currentDay);
});