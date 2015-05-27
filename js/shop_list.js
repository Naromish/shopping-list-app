function addListItem() {
    var text = $("#add-item").val();
    $("#add").append('<li>' + text + '</li>');
    $("#add-item").val('');

};


$(document).ready(function() {
    $("#new").on('click', addListItem);
    $('#add').on('dblclick', 'li', function() {
        $(this).toggleClass('strike');
        $(this).children().toggleClass();
    });

    
    //the below is not working and the delete icon is large and in the wrong position//

    $('#add').on('hover', 'li', function() {
        $(this).toggleClass('delete');
        $(this).children().toggleClass();
    });
    

    //the below is not working//

    $('add-item').keypress(function(e) {
        if (e.keyCode == 13) {
            alert('Entered');
        }
    



    });


   });



 






//want to remove ADD button and have input by ENTER key only
//right now only the first input field works now, how do I get the rest to work?

//how can i properly display the delete icon? I want it to appear on the right of the list item when hovering; then clicking the icon will delete that list item
//right now the icon is very big and displaying in the background

//how do I create a functional button at bottom to clear list?
//how do I style that button?

//still need to figure out how to make sortable the categories (along with any list items underneath)