function submitDirtyCode() {
	var code = document.getElementById("dirty-code").value;
  
  if (code != '') {
    var input = document.getElementsById("input");
    input.submit();
    convertCode(code);
  }
  else
  {
    alert("Please gimme code; I'm hungry :P");
  }
}

function convertCode(codeToConvert) {
  document.getElementById("clean-code").value = optimize(detectClearVars(detectFormatGraphScreen(codeToConvert)));
}

function detectFormatGraphScreen(code)
{
	alert("1");
      var fixedCode = code.replace(/1:prgmthetaFMT/g,"RectGC:CoordOn:GridOff:AxesOn Black:LabelOff:ExprOn:BorderColor 1:DetectAsymOn");
      fixedCode = fixedCode.replace(/2:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4");
      fixedCode = fixedCode.replace(/3:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4:ZQuadrant1::264->Xmax:164->Ymax");
      return fixedCode;
}


function detectClearVars(code) {
  var fixedCode = code.replace(/prgmCLR0VAR/g,"DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar IDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar QDelVar RDelVar SDelVar TDelVar UDelVar VDelVar WDelVar XDelVar YDelVar ZDelVar PDelVar theta");
}

function optimize(code) {
	var fixedCode = code.replace(/')'->/g,"->");
	fixedCode = fixedCode.replace(/'"'->/g,"->");
	fixedCode = fixedCode.replace(/0->/g,"DelVar ");
	fixedCode = fixedCode.replace(/}->/g,"->");
	return fixedCode;
}
