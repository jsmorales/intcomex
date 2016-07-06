$(function(){
	console.log('hola mascara por aca!!')


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

	//----------------------------------------------------------------
	$("#sales_revenue_mask").mask('000.000.000.000.000', {reverse: true});
		

	$('#sales_revenue_mask').keyup(function(event) {
		
		var val_sales_revenue = $(this).val();
		
		$('#sales_revenue').val(remplazar (val_sales_revenue, ".", ""))		

		frontMargin();
		backMargin();
	});
	//----------------------------------------------------------------

	//resultado_mask
	//https://code.google.com/archive/p/jquery-formatcurrency/wikis/Usage.wiki
});