// Business logic

function ToDo(item, state) {
  this.item = item;
  this.state = state;
}

ToDo.prototype.yell = function() {
  return this.item.toUpperCase() + "!!";
}

// UI logic

$(function() {
  $("form#one").submit(function(e) {
    e.preventDefault();

    var inputtedToDo = $("#list-item").val();

    var newToDo = new ToDo(inputtedToDo);



    $("#sortable").append("<li class='toDo'>" + newToDo.yell() + "</li>");

    $("#sortable").sortable({
      revert: true
    });
    $(".toDo").draggable({
      connectToSortable: "#sortable",
      // helper: "clone",
      // revert: "invalid"
    });
    $("ul, .toDo").disableSelection();


  });
});
