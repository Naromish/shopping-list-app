$(document).ready(function() {
    $('.add').on('dblclick', 'li', function() {
        $(this).toggleClass('strike');
        $(this).children().toggleClass();
    });

    $('.add').on('click', '.delete', function(e){
            e.preventDefault(); 
            $(this).parent().remove();
    });
    $('.add').sortable({ axis: "y" });
});

//figure out to hide delete img so it doesn't enlarge when strike

    //don't think i need the below anymore;found different solution
    //$('.add').on('hover', '.items', function() {
     //   $('.delete').toggleClass('show');
    //});


$(document).keydown(function(e) {
    if (e.keyCode == 13) {
         var text = $(".add-item").val();
        $(".add").append("<li>" + text + "<img class='delete' src='images/circle_x.png'></li>");
       $(".add-item").val('');
    }
});


//figure out why the delete button doesn't show consistently; something's off

$(document).mousedown(function(e) {

    $('.add').on('mouseenter', 'li', function(){
        $(this).children('.delete').toggleClass('show');
    });
    $('.add').on('mouseleave', 'li', function(){
        $(this).children('.delete').toggleClass('show');
    });
});


//how to create multiple inputs/categories; different divs?

//how do I create a functional button at bottom to clear list?
//how do I style that button?

//figure out how to clear list

// Button
//$('button').button();
