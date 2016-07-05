$(function(){
	console.log('hola mascara por aca!!')

	//----------------------------------------------------------------
	$("#sales_revenue_mask").mask('000.000.000.000.000', {reverse: true});

	function remplazar (texto, buscar, nuevo){
	    var temp = '';
	    var long = texto.length;
	    for (j=0; j<long; j++) {
	        if (texto[j] == buscar) 
	        {
	            temp += nuevo;
	        } else
	            temp += texto[j];
	    }
	    return temp;
	}

	/*
	$('#valor_mask').change(function(event) {
		
		//console.log($(this).val());
		var val_cuantia = $(this).val();
		//var val_replace = val_cuantia.replace(".", "");
		$('#valor').val(remplazar (val_cuantia, ".", ""))
		//console.log(remplazar (val_cuantia, ".", ""))
	});*/

	$('#sales_revenue_mask').keyup(function(event) {
		/* Act on the event */
		/* Act on the event */
		//console.log($(this).val());
		var val_sales_revenue = $(this).val();
		//var val_replace = val_cuantia.replace(".", "");
		$('#sales_revenue').val(remplazar (val_sales_revenue, ".", ""))
		//console.log(remplazar (val_cuantia, ".", ""))

		frontMargin();
		backMargin();
	});
});