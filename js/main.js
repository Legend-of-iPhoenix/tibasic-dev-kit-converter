function submitDirtyCode() {
	var code = document.getElementsByTagName("dirty-code")[0].value;
  
  if (code != '') {
    var input = document.getElementsByTagName("input");
    input[0].submit();
    convertCode(code);
  }
  else
  {
    alert("Please gimme code; I'm hungry :P");
  }
}

function convertCode(codeToConvert) {
  document.getElementsByTagName("clean-code")[0].value = detectFormatGraphScreen(codeToConvert);
}

function detectFormatGraphScreen(code)
{
      var fixedCode = code.replace(/1:prgmthetaFMT/g,"RectGC:CoordOn:GridOff:AxesOn Black:LabelOff:ExprOn:BorderColor 1:DetectAsymOn");
      fixedCode = fixedCode.replace(/2:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4");
      fixedCode = fixedCode.replace(/3:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4:ZQuadrant1::264->Xmax:164->Ymax");
      return fixedCode;
}

/*
function detectClearVars(code) {
  var fixedCode = code.replace(/prgmCLR0VAR/g,"DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar IDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar QDelVar RDelVar SDelVar TDelVar UDelVar VDelVar WDelVar XDelVar YDelVar ZDelVar PDelVar theta");
}
*/
