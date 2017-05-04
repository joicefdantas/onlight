(function($) {
	$('#btn-change').click(function() {
		if ($('#btn-change').hasClass('btn-on')){
			$('#btn-change').removeClass('btn-on');
			$(".img-off").attr("src", "img/lampada_desligada.png")
			$("#btn-change").html("Ligar")
			$( "#btn-change" ).addClass( "btn-off" );
			
    	} else if ($('#btn-change').hasClass('btn-off')){
        	$('#btn-change').removeClass('btn-off');
			$(".img-off").attr("src", "img/lampada_ligada.png")
			$("#btn-change").html("Desligar")
			$( "#btn-change" ).addClass( "btn-on" );
      	}
	});
})(jQuery);
