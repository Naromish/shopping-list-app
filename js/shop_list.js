<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Walter+Turncoat::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); </script>

  $(document).ready(function() {

// use enter to add list items
	$('#new-item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
		};
	});	

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#new-item').val())) {
		else {
			$('<li class="items"></li>').appendTo('#list');

		document.getElementById('item').value = '';
		};
	});