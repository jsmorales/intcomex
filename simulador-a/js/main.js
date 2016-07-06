// GROSS PROFIT
document.getElementById("sales_revenue").onkeyup = function(){
	frontMargin();
	backMargin();

};

document.getElementById("fmp").onkeyup = frontMargin;

function frontMargin () {
	var f1 = document.getElementById("sales_revenue").value;
	var f2 = ((document.getElementById("fmp").value)/100);

	var r1= f1*f2;
	//------------------------------------------------------
	document.getElementById("resultado").value=r1.toFixed();
	//------------------------------------------------------
	$("#resultado_mask").val(r1.toFixed());
	$("#resultado_mask").formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
	//------------------------------------------------------
	grossProfit();
	sumPercent();
}

document.getElementById("backend-margin").onkeyup = backMargin;

function backMargin(){
	var b1 = document.getElementById("sales_revenue").value;
	var b2 = (document.getElementById("backend-margin").value)/100;

	var r2= b1*b2;
	document.getElementById("resultado_bk").value=r2.toFixed();
	//---------------------------------------------------------
	$("#resultado_bk_mask").val(r2.toFixed());
	$("#resultado_bk_mask").formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
	//---------------------------------------------------------
	grossProfit();
	sumPercent();
}

function grossProfit() {
	var c1= document.getElementById("resultado").value;
	var c2= document.getElementById("resultado_bk").value;

	if (c1 == 0 && c2 == 0){
		var res_tot = document.getElementById("sales_revenue").value;
	}
	else{
		var res_tot= (parseInt(c1)+parseInt(c2));

	}
	document.getElementById("res_tot").value=res_tot;
	//-----------------------------------------------
	$("#res_tot_mask").val(res_tot);
	$("#res_tot_mask").formatCurrency({roundToDecimalPlace:0,symbol:'',digitGroupSymbol:'.'});
	//-----------------------------------------------
}

function sumPercent() {
	if (document.getElementById("fmp").value == "") {
		var p1 = parseInt(0);
	}else {
		var p1= document.getElementById("fmp").value;
	}

	if (document.getElementById("backend-margin").value == "") {
	    var p2= parseInt(0);
	}else{
		var p2= document.getElementById("backend-margin").value;
	}
	var perc_tot= (parseFloat(p1)+parseFloat(p2));
	document.getElementById("resultado_per").value=perc_tot.toFixed(1);
}


/******************************
// TOTAL DIRECT COST
*******************************/
document.getElementById("dcr").onkeyup = function () {
	addCostPP();

};

document.getElementById("dlr").onkeyup = addCostPP;
document.getElementById("adcp_percentage").onkeyup = addCostPP;
function addCostPP() {
	if (document.getElementById("dcr").value == "") {
		var dcr = 0;
	}else {
		var dcr = document.getElementById("dcr").value;
	}

	if (document.getElementById("dlr").value == "") {
		var dlr = 0;
	}else {
		var dlr = document.getElementById("dlr").value;
	}

	var d1= (parseInt(dcr)+ parseInt(dlr));

	if (document.getElementById("adcp_percentage").value === "") {
		var d2= parseInt(0);
	}else{
		var d2= (document.getElementById("adcp_percentage").value)/100;
	}

	var dtotal = d1*d2;
	document.getElementById("adcp").value=dtotal;

	totalDirectCost();
	tdcPercent();
	contribMargin();
	contribMarPer();
	fixedCA();

}


document.getElementById("vendor_funding").onkeyup = addCostPP;
function totalDirectCost(){

	if (document.getElementById("dcr").value === "") {
		var tdc1 = parseInt(0);
	}else {
		var tdc1 = parseInt(document.getElementById("dcr").value);
	}

 	if (document.getElementById("dlr").value === "") {
 		var tdc2 = parseInt(0);
 	}else {
 		var tdc2 = parseInt(document.getElementById("dlr").value);
 	}

 	if (document.getElementById("adcp").value === NaN) {
 		var tdc3 = parseInt(0);
 	}else {
 		var tdc3 = parseInt(document.getElementById("adcp").value);
 	}

 	if (document.getElementById("vendor_funding").value === "") {
 		var tdc4 = parseInt(0);
 	}else {
 		var tdc4 = parseInt(document.getElementById("vendor_funding").value);
 	}

 	var totaldc = tdc1 + tdc2 + tdc3 + tdc4;
 	document.getElementById("tdc").value=totaldc;
 }

function tdcPercent(){
	var tdcp1 = document.getElementById("tdc").value;
	var tdcp2 = document.getElementById("sales_revenue").value;

	var tdcp_tot = (tdcp1/tdcp2)*100;
	document.getElementById("tdcPercent").value=parseFloat(tdcp_tot).toFixed(1);

}

/********************************
        CONTRIBUTION MARGIN
*********************************/
function contribMargin(){
	var cm1= document.getElementById("res_tot").value;
	var cm2= document.getElementById("tdc").value;

	var cont_mar= parseInt(cm1)-parseInt(cm2);
	document.getElementById("cont_mar").value=cont_mar;

}

function contribMarPer(){
	var cmp1 = document.getElementById("sales_revenue").value;
	var cmp2 = document.getElementById("cont_mar").value;

	var cmp_tot = (cmp2/cmp1)*100;
	document.getElementById("contribMarPer").value=parseFloat(cmp_tot).toFixed(1);

}

/********************************
        FIXED COST ALLOCATION
*********************************/

document.getElementById("fcaPer").onkeyup = function () {
	fixedCA();
};

function fixedCA(){

	var fca2= (document.getElementById("fcaPer").value)/100;

	var fca1 = document.getElementById("sales_revenue").value;

	var fixedCA = fca1*fca2;

	document.getElementById("fca").value= parseInt(fixedCA);

	poi();
	poiPer();
}

/********************************
    PROFORMA OPERATING INCOME
*********************************/
function poi(){
	var poi1 = document.getElementById("cont_mar").value;
	var poi2 = document.getElementById("fca").value;

	var poiTot = poi1 - poi2;

	document.getElementById("poi").value = parseInt(poiTot);

}

function poiPer(){
	var poiPer1 = document.getElementById("poi").value;
	var poiPer2 = document.getElementById("sales_revenue").value;

	var poiPerTot = ((parseInt(poiPer1)) / (parseInt(poiPer2)))*100;

	document.getElementById("poiPer").value = parseFloat(poiPerTot).toFixed(1);

}


/********************************
    DPO - DIO - DSO - WCD
*********************************/
document.getElementById("dpo").onkeyup = function () {
	wcd()
};

document.getElementById("dio").onkeyup = wcd;
document.getElementById("dso").onkeyup = wcd;

function wcd(){
	var wcd1 = document.getElementById("dpo").value;
	var wcd2 = document.getElementById("dio").value;
	var wcd3 = document.getElementById("dso").value;

	var wcdTot = (parseInt(wcd2) + parseInt(wcd3)) - (parseInt(wcd1));

	document.getElementById("wcd").value = parseInt(wcdTot).toFixed();

	acc_pay();
	inventory();
	acc_rec();
	aic();
	taxes()
	proforma();
	roic()
	roicProxi()
	gmroi()
	gmrowc()
}


/********************************
    ACCOUNTS PAYABLE
*********************************/

function acc_pay(){
	var acc1 = document.getElementById("sales_revenue").value;
	var acc2 = document.getElementById("resultado").value;
	var acc3 = document.getElementById("dpo").value;

	accTot = ((acc1 - acc2)/360)* acc3;

	// if (accTot < 0 ){

	document.getElementById("acc_pay").value = "-" + parseInt(accTot);

	// }
}


/********************************
    INVENTORY
*********************************/
function inventory(){
	var inv1 = document.getElementById("sales_revenue").value;
	var inv2 = document.getElementById("res_tot").value;
	var inv3 = document.getElementById("dio").value;

	var invTot = ((inv1 - inv2)/360)* (inv3);

	document.getElementById("inv").value = parseInt(invTot).toFixed();

}

/********************************
    ACCOUNT RECEIVABLE
*********************************/
function acc_rec(){
	var ar1 = document.getElementById("sales_revenue").value;
	var ar2 = document.getElementById("dso").value;

	var arTot = (parseInt(ar1)/parseInt(360))*parseInt(ar2);

	document.getElementById("acc_rec").value = parseInt(arTot).toFixed();
}

/********************************
    AVERAGE INVESTED CAPITAL
*********************************/
function aic(){
	var aic1= document.getElementById("acc_pay").value;
	var aic2= document.getElementById("inv").value;
	var aic3= document.getElementById("acc_rec").value;

	var aicTot = parseInt(aic1) + parseInt(aic2) + parseInt(aic3);

	document.getElementById("av_inv_cap").value = aicTot.toFixed();
}


/********************************
    TAXES
*********************************/
document.getElementById("taxes_per").onkeyup = wcd;

function taxes(){
	var tax1 = document.getElementById("poi").value;
	var tax2 = (document.getElementById("taxes_per").value);

	var taxTot = (parseInt(tax1) * parseInt(tax2))/100;

	document.getElementById("taxes").value = parseInt(taxTot);
}

/********************************
    PROFORMA
*********************************/

function proforma() {
	 var pro1= document.getElementById("poi").value;
	 var pro2= document.getElementById("taxes").value;

	 var proTot= pro1 - pro2;

	 document.getElementById("pro").value = parseInt(proTot);

}


/********************************
    ROIC
*********************************/
function roic() {
	 var roic1= document.getElementById("pro").value;
	 var roic2= document.getElementById("av_inv_cap").value;

	 var roicTot= (roic1 / roic2)*100;

	 document.getElementById("roic").value = parseInt(roicTot);

}


/********************************
    ROIC PROXI
*********************************/
function roicProxi() {
	 var roicp1= document.getElementById("poiPer").value;
	 var roicp2= document.getElementById("wcd").value;

	 var roicpTot= (roicp1 * 175 / roicp2);

	 document.getElementById("roic_proxi").value = parseInt(roicpTot);

}

/********************************
    GMROI
*********************************/
function gmroi() {
	 var gmroi1= document.getElementById("res_tot").value;
	 var gmroi2= document.getElementById("inv").value;

	 var gmroiTot= (gmroi1 / gmroi2)*100;

	 document.getElementById("gmroi").value = parseInt(gmroiTot);

}

/********************************
    GMROI
*********************************/
function gmrowc() {
	 var gmrowc1= document.getElementById("res_tot").value;
	 var gmrowc2= document.getElementById("av_inv_cap").value;

	 var gmrowcTot= (gmrowc1 / gmrowc2)*100;

	 document.getElementById("gmrowc").value = parseInt(gmrowcTot);

}


console.log('Esto funciona al pelo');
