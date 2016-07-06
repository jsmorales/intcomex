
// SUMAS 
function sumarColumna(clase, id){
	var inputs = document.getElementsByClassName(clase);
	var total = 0;
	
	for (var i = inputs.length - 1; i >= 0; i--) {		
		if (isNaN (parseInt(inputs[i].value))) {
			total += 0;
		}
		else {
			total += parseInt(inputs[i].value);
		}		
	}
	$("#"+ id).val(total);
};

// DIVISIONES
function dividirColumna(dividendo, divisor, idtotal){	
	var total = 0;

	if (divisor == 0) {
		total = 0;
	}else {
		total = $("#" + dividendo).val() / $("#" + divisor).val();
	}	

	$("#"+ idtotal).val(total.toFixed());		
};


// PORCENTAJES

function weeklyColumna(dividendo, divisor, idtotal){	
	var total = 0;

	if (divisor == 0) {
		total = 0;
	}else {
		total = ($("#" + dividendo).val() / $("#" + divisor).val())*52;
	}	

	$("#"+ idtotal).val((total*100).toFixed());		
};


function monthlyColumna(dividendo, divisor, idtotal){	
	var total = 0;

	if (divisor == 0) {
		total = 0;
	}else {
		total = ($("#" + dividendo).val() / $("#" + divisor).val())*12;
	}	

	$("#"+ idtotal).val((total*100).toFixed());		
};


function quarterColumna(dividendo, divisor, idtotal){	
	var total = 0;

	if (divisor == 0) {
		total = 0;
	}else {
		total = ($("#" + dividendo).val() / $("#" + divisor).val())*4;
	}	

	$("#"+ idtotal).val(total*100);		
};

// OPERACIONES
// SUMA COLUMNA A - OHWR SPECIALIZED

$(".ohwr").on('keyup', function() {
	event.preventDefault();
	sumarColumna("ohwr","e1");
});

// SUMA COLUMNA B - DIO SPECIALIZED

$(".dio").on('keyup', function() {
	event.preventDefault();
	sumarColumna("dio","e2");
});

// SUMA COLUMNA C - DAILY IMPACT SPECIALIZED

$(".di").on('keyup', function() {	
	sumarColumna("di","e3");
});

// SUMA COLUMNA D - GROSS MARGIN WEEKLY SPECIALIZED

$(".gmw").on('keyup', function() {	
	sumarColumna("gmw","e4");
});


// SUMA COLUMNA E - GROSS MARGIN WEEKLY SPECIALIZED PERC

$(".gmwp").on('keyup', function() {	
	sumarColumna("gmwp","e5");
});


// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED

$(".gmm").on('keyup', function() {	
	sumarColumna("gmm","e6");
});

// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED PERC
$(".gmmp").on('keyup', function() {	
	sumarColumna("gmmp","e7");
});

// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED
$(".gmq").on('keyup', function() {	
	sumarColumna("gmq","e8");
});


// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED PERC
$(".gmqp").on('keyup', function() {	
	sumarColumna("gmqp","e9");
});


// CALCULOS FILA A - ACCESORIES

$(".a11").on('keyup', function() {
	dividirColumna("a1","a2","a3" );	
});

$(".a22").on('keyup', function() {
	weeklyColumna("a4","a1","a5" );
});


$(".a33").on('keyup', function() {
	monthlyColumna("a6","a1","a7" );
});

$(".a44").on('keyup', function() {
	quarterColumna("a8","a1","a9" );
});



// CALCULOS FILA B - SECURITY

$(".b11").on('keyup', function() {
	dividirColumna("b1","b2","b3" );	
});

$(".b22").on('keyup', function() {
	weeklyColumna("b4","b1","b5" );
});


$(".b33").on('keyup', function() {
	monthlyColumna("b6","b1","b7" );
});

$(".b44").on('keyup', function() {
	quarterColumna("b8","b1","b9" );
});


// CALCULOS FILA C - GAMING

$(".c11").on('keyup', function() {
	dividirColumna("c1","c2","c3" );	
});

$(".c22").on('keyup', function() {
	weeklyColumna("c4","c1","c5" );
});


$(".c33").on('keyup', function() {
	monthlyColumna("c6","c1","c7" );
});

$(".c44").on('keyup', function() {
	quarterColumna("c8","c1","c9" );
});

// 
// CALCULOS FILA D - P.O.S

$(".d11").on('keyup', function() {
	dividirColumna("d1","d2","d3" );	
});

$(".d22").on('keyup', function() {
	weeklyColumna("d4","d1","d5" );
});


$(".d33").on('keyup', function() {
	monthlyColumna("d6","d1","d7" );
});

$(".d44").on('keyup', function() {
	quarterColumna("d8","d1","d9" );
});

// 
// CALCULOS FILA F - EXCLUSIVE

$(".f11").on('keyup', function() {
	dividirColumna("f1","f2","f3" );	
});

$(".f22").on('keyup', function() {
	weeklyColumna("f4","f1","f5" );
});

$(".f33").on('keyup', function() {
	monthlyColumna("f6","f1","f7" );
});

$(".f44").on('keyup', function() {
	quarterColumna("f8","f1","f9" );
});


// 
// CALCULOS FILA G - ACTIVATION MOBILE
$(".g11").on('keyup', function() {
	dividirColumna("g1","g2","g3" );	
});

$(".g22").on('keyup', function() {
	weeklyColumna("g4","g1","g5" );
});

$(".g33").on('keyup', function() {
	monthlyColumna("g6","g1","g7" );
});

$(".g44").on('keyup', function() {
	quarterColumna("g8","g1","g9" );
});

// CALCULOS FILA H - MOBILE MOBILE
$(".h11").on('keyup', function() {
	dividirColumna("h1","h2","h3" );	
});

$(".h22").on('keyup', function() {
	weeklyColumna("h4","h1","h5" );
});

$(".h33").on('keyup', function() {
	monthlyColumna("h6","h1","h7" );
});

$(".h44").on('keyup', function() {
	quarterColumna("h8","h1","h9" );
});


// SUMA COLUMNA A - OHWR SPECIALIZED

$(".ohwr1").on('keyup', function() {
	event.preventDefault();
	sumarColumna("ohwr1","i1");
});

// SUMA COLUMNA B - DIO SPECIALIZED

$(".dio1").on('keyup', function() {
	event.preventDefault();
	sumarColumna("dio1","i2");
});

// SUMA COLUMNA C - DAILY IMPACT SPECIALIZED

$(".di1").on('keyup', function() {	
	sumarColumna("di1","i3");
});

// SUMA COLUMNA D - GROSS MARGIN WEEKLY SPECIALIZED

$(".gmw1").on('keyup', function() {	
	sumarColumna("gmw1","i4");
});


// SUMA COLUMNA E - GROSS MARGIN WEEKLY SPECIALIZED PERC

$(".gmwp1").on('keyup', function() {	
	sumarColumna("gmwp1","i5");
});


// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED

$(".gmm1").on('keyup', function() {	
	sumarColumna("gmm1","i6");
});

// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED PERC
$(".gmmp1").on('keyup', function() {	
	sumarColumna("gmmp1","i7");
});

// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED
$(".gmq1").on('keyup', function() {	
	sumarColumna("gmq1","i8");
});


// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED PERC
$(".gmqp1").on('keyup', function() {	
	sumarColumna("gmqp1","i9");
});

// 
// CALCULOS FILA G - ACTIVATION MOBILE
$(".g11").on('keyup', function() {
	dividirColumna("g1","g2","g3" );	
});

$(".g22").on('keyup', function() {
	weeklyColumna("g4","g1","g5" );
});

$(".g33").on('keyup', function() {
	monthlyColumna("g6","g1","g7" );
});

$(".g44").on('keyup', function() {
	quarterColumna("g8","g1","g9" );
});

// CALCULOS FILA J -NETWORKING BROADLINE -VALUE
$(".j11").on('keyup', function() {	
	dividirColumna("j1","j2","j3" );	
});

$(".j22").on('keyup', function() {	
	weeklyColumna("j4","j1","j5" );
});

$(".j33").on('keyup', function() {	
	monthlyColumna("j6","j1","j7" );
});

$(".j44").on('keyup', function() {	
	quarterColumna("j8","j1","j9" );
});


// CALCULOS FILA J -NETWORKING BROADLINE -VALUE
$(".k11").on('keyup', function() {	
	dividirColumna("k1","k2","k3" );	
});

$(".k22").on('keyup', function() {	
	weeklyColumna("k4","k1","k5" );
});

$(".k33").on('keyup', function() {	
	monthlyColumna("k6","k1","k7" );
});

$(".k44").on('keyup', function() {	
	quarterColumna("k8","k1","k9" );
});



// SUMA COLUMNA A - OHWR SPECIALIZED

$(".ohwr2").on('keyup', function() {
	event.preventDefault();
	sumarColumna("ohwr2","l1");
});

// SUMA COLUMNA B - DIO SPECIALIZED

$(".dio2").on('keyup', function() {
	event.preventDefault();
	sumarColumna("dio2","l2");
});

// SUMA COLUMNA C - DAILY IMPACT SPECIALIZED

$(".di2").on('keyup', function() {	
	sumarColumna("di2","l3");
});

// SUMA COLUMNA D - GROSS MARGIN WEEKLY SPECIALIZED

$(".gmw2").on('keyup', function() {	
	sumarColumna("gmw2","l4");
});


// SUMA COLUMNA E - GROSS MARGIN WEEKLY SPECIALIZED PERC

$(".gmwp2").on('keyup', function() {	
	sumarColumna("gmwp2","l5");
});


// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED

$(".gmm2").on('keyup', function() {	
	sumarColumna("gmm2","l6");
});

// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED PERC
$(".gmmp2").on('keyup', function() {	
	sumarColumna("gmmp2","l7");
});

// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED
$(".gmq2").on('keyup', function() {	
	sumarColumna("gmq2","l8");
});


// SUMA COLUMNA E 
$(".gmqp2").on('keyup', function() {	
	sumarColumna("gmqp2","l9");
});


// CALCULOS FILA M 
$(".m11").on('keyup', function() {	
	dividirColumna("m1","m2","m3" );	
});

$(".m22").on('keyup', function() {	
	weeklyColumna("m4","m1","m5" );
});

$(".m33").on('keyup', function() {	
	monthlyColumna("m6","m1","m7" );
});

$(".m44").on('keyup', function() {	
	quarterColumna("m8","m1","m9" );
});


// CALCULOS FILA N 
$(".n11").on('keyup', function() {	
	dividirColumna("n1","n2","n3" );	
});

$(".n22").on('keyup', function() {	
	weeklyColumna("n4","n1","n5" );
});

$(".n33").on('keyup', function() {	
	monthlyColumna("n6","n1","n7" );
});

$(".n44").on('keyup', function() {	
	quarterColumna("n8","n1","n9" );
});

// CALCULOS FILA O
$(".o11").on('keyup', function() {	
	dividirColumna("o1","o2","o3" );	
});

$(".o22").on('keyup', function() {	
	weeklyColumna("o4","o1","o5" );
});

$(".o33").on('keyup', function() {	
	monthlyColumna("o6","o1","o7" );
});

$(".o44").on('keyup', function() {	
	quarterColumna("o8","o1","o9" );
});

// CALCULOS FILA P
$(".p11").on('keyup', function() {	
	dividirColumna("p1","p2","p3" );	
});

$(".p22").on('keyup', function() {	
	weeklyColumna("p4","p1","p5" );
});

$(".p33").on('keyup', function() {	
	monthlyColumna("p6","p1","p7" );
});

$(".p44").on('keyup', function() {	
	quarterColumna("p8","p1","p9" );
});

// CALCULOS FILA Q
$(".q11").on('keyup', function() {	
	dividirColumna("q1","q2","q3" );	
});

$(".q22").on('keyup', function() {	
	weeklyColumna("q4","q1","q5" );
});

$(".q33").on('keyup', function() {	
	monthlyColumna("q6","q1","q7" );
});

$(".q44").on('keyup', function() {	
	quarterColumna("q8","q1","q9" );
});

// CALCULOS FILA Q
$(".s11").on('keyup', function() {	
	dividirColumna("s1","s2","s3" );	
});

$(".s22").on('keyup', function() {	
	weeklyColumna("s4","s1","s5" );
});

$(".s33").on('keyup', function() {	
	monthlyColumna("s6","s1","s7" );
});

$(".s44").on('keyup', function() {	
	quarterColumna("s8","s1","s9" );
});


// SUMA COLUMNA A - OHWR SPECIALIZED

$(".ohwr3").on('keyup', function() {
	event.preventDefault();
	sumarColumna("ohwr3","t1");
});

// SUMA COLUMNA B - DIO SPECIALIZED

$(".dio3").on('keyup', function() {
	event.preventDefault();
	sumarColumna("dio3","t2");
});

// SUMA COLUMNA C - DAILY IMPACT SPECIALIZED

$(".di3").on('keyup', function() {	
	sumarColumna("di3","t3");
});

// SUMA COLUMNA D - GROSS MARGIN WEEKLY SPECIALIZED

$(".gmw3").on('keyup', function() {	
	sumarColumna("gmw3","t4");
});


// SUMA COLUMNA E - GROSS MARGIN WEEKLY SPECIALIZED PERC

$(".gmwp3").on('keyup', function() {	
	sumarColumna("gmwp3","t5");
});


// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED

$(".gmm3").on('keyup', function() {	
	sumarColumna("gmm3","t6");
});

// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED PERC
$(".gmmp3").on('keyup', function() {	
	sumarColumna("gmmp3","t7");
});

// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED
$(".gmq3").on('keyup', function() {	
	sumarColumna("gmq3","t8");
});


// SUMA COLUMNA E 
$(".gmqp3").on('keyup', function() {	
	sumarColumna("gmqp3","t9");
});



// SUMA COLUMNA A - OHWR SPECIALIZED

$(".ohwr4").on('keyup', function() {
	sumarColumna("ohwr4","u1");
});

// SUMA COLUMNA B - DIO SPECIALIZED

$(".dio4").on('keyup', function() {	
	sumarColumna("dio4","u2");
});

// SUMA COLUMNA C - DAILY IMPACT SPECIALIZED

$(".di4").on('keyup', function() {	
	sumarColumna("di4","u3");
});

// SUMA COLUMNA D - GROSS MARGIN WEEKLY SPECIALIZED

$(".gmw4").on('keyup', function() {	
	sumarColumna("gmw4","u4");
});


// SUMA COLUMNA E - GROSS MARGIN WEEKLY SPECIALIZED PERC

$(".gmwp4").on('keyup', function() {	
	sumarColumna("gmwp4","u5");
});


// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED

$(".gmm4").on('keyup', function() {	
	sumarColumna("gmm4","u6");
});

// SUMA COLUMNA E - GROSS MARGIN MONTHLY SPECIALIZED PERC
$(".gmmp4").on('keyup', function() {	
	sumarColumna("gmmp4","u7");
});

// SUMA COLUMNA E - GROSS MARGIN QUARTERLY SPECIALIZED
$(".gmq4").on('keyup', function() {	
	sumarColumna("gmq4","u8");
});


// SUMA COLUMNA E 
$(".gmqp4").on('keyup', function() {	
	sumarColumna("gmqp4","u9");
});