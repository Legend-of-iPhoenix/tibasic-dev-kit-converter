var optimizations = [
	[/1:prgmthetaFMT/g,"RectGC:CoordOn:GridOff:AxesOn Black:LabelOff:ExprOn:BorderColor 1:DetectAsymOn"],
	[/2:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4"],
	[/3:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4:ZQuadrant1::264->Xmax:164->Ymax"],
	[/prgmCLR0VAR/g,"DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar IDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar QDelVar RDelVar SDelVar TDelVar UDelVar VDelVar WDelVar XDelVar YDelVar ZDelVar PDelVar theta"],
	[/\u0029->/g, "->"],
	[/["}]->/g,"->"],
	[/^0->A$/gm,"DelVar A"],
	[/^0->B$/gm,"DelVar B"],
	[/^0->C$/gm,"DelVar C"],
	[/^0->D$/gm,"DelVar D"],
	[/^0->E$/gm,"DelVar E"],
	[/^0->F$/gm,"DelVar F"],
	[/^0->G$/gm,"DelVar G"],
	[/^0->H$/gm,"DelVar H"],
	[/^0->I$/gm,"DelVar I"],
	[/^0->J$/gm,"DelVar J"],
	[/^0->K$/gm,"DelVar K"],
	[/^0->L$/gm,"DelVar L"],
	[/^0->M$/gm,"DelVar M"],
	[/^0->N$/gm,"DelVar N"],
	[/^0->O$/gm,"DelVar O"],
	[/^0->P$/gm,"DelVar P"],
	[/^0->Q$/gm,"DelVar Q"],
	[/^0->R$/gm,"DelVar R"],
	[/^0->S$/gm,"DelVar S"],
	[/^0->T$/gm,"DelVar T"],
	[/^0->U$/gm,"DelVar U"],
	[/^0->V$/gm,"DelVar V"],
	[/^0->W$/gm,"DelVar W"],
	[/^0->X$/gm,"DelVar X"],
	[/^0->Y$/gm,"DelVar Y"],
	[/^0->Z$/gm,"DelVar Z"],
	[/^0->theta$/gm,"DelVar theta"],
	[/DelVar A\n/g,"DelVar A"],
	[/DelVar B\n/g,"DelVar B"],
	[/DelVar C\n/g,"DelVar C"],
	[/DelVar D\n/g,"DelVar D"],
	[/DelVar E\n/g,"DelVar E"],
	[/DelVar F\n/g,"DelVar F"],
	[/DelVar G\n/g,"DelVar G"],
	[/DelVar H\n/g,"DelVar H"],
	[/DelVar I\n/g,"DelVar I"],
	[/DelVar J\n/g,"DelVar J"],
	[/DelVar K\n/g,"DelVar K"],
	[/DelVar L\n/g,"DelVar L"],
	[/DelVar M\n/g,"DelVar M"],
	[/DelVar N\n/g,"DelVar N"],
	[/DelVar O\n/g,"DelVar O"],
	[/DelVar P\n/g,"DelVar P"],
	[/DelVar Q\n/g,"DelVar Q"],
	[/DelVar R\n/g,"DelVar R"],
	[/DelVar S\n/g,"DelVar S"],
	[/DelVar T\n/g,"DelVar T"],
	[/DelVar U\n/g,"DelVar U"],
	[/DelVar V\n/g,"DelVar V"],
	[/DelVar W\n/g,"DelVar W"],
	[/DelVar X\n/g,"DelVar X"],
	[/DelVar Y\n/g,"DelVar Y"],
	[/DelVar Z\n/g,"DelVar Z"],
	[/DelVar theta\n/g,"DelVar theta"]
];

function submitDirtyCode() {
	var code = document.getElementById("dirty-code").value;
	
	// In order to make my optimizations work, I need to delete all indentation, which is unfortunate.
	code = code.replace(/^\t+/g, "");
	code = code.replace(/^ +/g, "");
	
	// Check if empty code
	if (code == "") {
		alert("Please gimme code; I'm hungry :P");
	} else {
		document.getElementById("charCount1").innerHTML = "Length: "+code.length+" characters";
		var newCode = optimize(code);
		document.getElementById("clean-code").value = newCode;
		document.getElementById("charCount2").innerHTML = "Length: " + newCode.length + " characters";
	}
}

function optimize(code) {
	for (var index = 0; index < optimizations.length; index++) {
		code = code.replace(optimizations[index][0], optimizations[index][1]);
	}
	
	return code;
}
