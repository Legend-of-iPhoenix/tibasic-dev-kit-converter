var optimizations = [
	[/1:prgmthetaFMT/g,"RectGC:CoordOn:GridOff:AxesOn Black:LabelOff:ExprOn:BorderColor 1:DetectAsymOn"],
	[/2:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4"],
	[/3:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4:ZQuadrant1::264->Xmax:164->Ymax"],
	[/prgmCLR0VAR/g,"DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar IDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar QDelVar RDelVar SDelVar TDelVar UDelVar VDelVar WDelVar XDelVar YDelVar ZDelVar PDelVar theta"],
	[/\u0029->/g, "->"],
	[/["}]->/g,"->"],
	[/^0->([A-Z|theta])/g,"DelVar $1"],
	[/DelVar ([A-Z|theta])\n/g,"DelVar $1"]
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
