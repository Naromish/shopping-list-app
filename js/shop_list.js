function addListItem() {
    var text = $("#add-item").val();
    $("#add").append('<li>' + text + '</li>');
    $("#add-item").val('');
    $('#add-item').keydown(function(enter) {
        if (enter.keyCode == 13) {
            postItem();
        }
    });

};


$(document).ready(function() {
    $("#new").on('click', addListItem);
    $('#add').on('dblclick', 'li', function() {
        $(this).toggleClass('strike');
        $(this).children().toggleClass();
    });

});
