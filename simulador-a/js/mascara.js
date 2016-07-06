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

	$("#dcr_mask").mask('000.000.000.000.000', {reverse: true});

	$("#dcr_mask").keyup(function(){
		//$(this).formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
		var val_dcr = $(this).val();

		$('#dcr').val(remplazar (val_dcr, ".", ""))

		addCostPP();

	});

	$("#dlr_mask").mask('000.000.000.000.000', {reverse: true});

	$("#dlr_mask").keyup(function(){
		//$(this).formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
		var val_dlr = $(this).val();

		$('#dlr').val(remplazar (val_dlr, ".", ""))

		addCostPP();

	});

	$("#vendor_funding_mask").mask('000.000.000.000.000', {reverse: true});

	$("#vendor_funding_mask").keyup(function(){
		//$(this).formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
		var val_vendor = $(this).val();

		$('#vendor_funding').val(remplazar (val_vendor, ".", ""))

		addCostPP();

	});


});
