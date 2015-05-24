$(document).ready(function(){

// use enter to add list items
	$('#add-item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
		};
});

//add list items
	$('#add-item').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#add-item').val())) {
			alert('Please enter an item');
		} else {
			$('<li class="items"></li>').appendTo('#list').html();

		document.getElementById('item').value = '';
		};
	});


//sortable list items
	$('#add').sortable({ axis: "y" });




	});
