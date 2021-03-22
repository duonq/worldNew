var i = true;
$('.img').click(function(id) {
	if (i) {
		$('#text'+this.id).hide();
		$('#'+this.id).attr({
			src: 'images/home_26.jpg',
			
		});
		return i = false;
	}
	else {
		$('#text'+this.id).show();
		$('#'+this.id).attr({
			src: 'images/home_14.jpg',
			
		});
		return i = true;
	}
	/* Act on the event */
});