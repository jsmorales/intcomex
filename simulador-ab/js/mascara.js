$(function(){
	
	//console.log('hola mascara simulador-ab')

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

	$("#dcr_mask").mask('000.000.000.000.000', {reverse: true});

	$("#dcr_mask").keyup(function(){
		//$(this).formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
		var val_dcr = $(this).val();

		$('#dcr').val(remplazar (val_dcr, ".", ""))

		addCostPP();

	});

	$("#btn_reset").click(function(event) {
		/* Act on the event */
		console.log($("#frm_simab"))
		$("#frm_simab")[0].reset();
		return false;
	});

});