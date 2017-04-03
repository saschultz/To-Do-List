// Business logic

function Places(placeName, time, landmarks, notes) {
  this.placeName = placeName;
  this.time = time;
  this.landmarks = landmarks;
  this.notes = notes;
}

Places.prototype.nameYear = function() {
  return this.placeName + " - " + this.time;
}



// UI logic

$(function() {
  $("form#places").submit(function(e) {
    e.preventDefault();

    var inputName = $("input#name").val();
    var inputTime = $("input#time").val();
    var inputLandmarks = $("input#landmarks").val();
    var inputNotes = $("input#notes").val();

    var newPlaces = new Places(inputName, inputTime, inputLandmarks, inputNotes);

    $("input#name, input#time, input#landmarks, input#notes").val("");

    $("#name-output").append("<li>" + newPlaces.nameYear() + "</li>");
  });

});
