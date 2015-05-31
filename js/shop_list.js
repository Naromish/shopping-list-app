$(document).ready(function() {
    $('.add').on('dblclick', 'li', function() {
        $(this).toggleClass('strike');
        $(this).children('strike').toggleClass('hide');
    });

    $('.add').on('click', '.delete', function(e){
            e.preventDefault(); 
            $(this).parent().remove();
    });
    $('.add').sortable({ axis: "y" });


    $('.gone').click (function() { 
            $('.items').remove();
    });

});


$(document).keydown(function(e) {
    if (e.keyCode == 13) {
         var text = $(".add-item").val();
        $(".add").append("<li class='items'>" + text + "<img class='delete' src='images/circle_x.png'></li>");
       $(".add-item").val('');
    }

//how to create multiple inputs/categories; different divs?

       // var titles = [list-item];            
        //$('input[name^=list-item]').each(function(){
        //    titles.push
        //    $(this).val();
       // }


});





//figure out why the delete button jumps around; positioning is off

$(document).mousedown(function(e) {

    $('.add').on('mouseenter', 'li', function(){
        $(this).children('.delete').toggleClass('show');
    });
    $('.add').on('mouseleave', 'li', function(){
        $(this).children('.delete').toggleClass('show');
    });
});





// Button
//$('button').button();

    //don't think i need the below anymore;found different solution
    //$('.add').on('hover', '.items', function() {
     //   $('.delete').toggleClass('show');
    //});

