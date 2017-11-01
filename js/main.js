function submitDirtyCode() {
	var code = document.getElementById("dirty-code").value;
	convertCode(code);
  
  if (code != '') {
    var input = document.getElementById("input");
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
      var fixedCode = code;
      fixedCode = fixedCode.replace(/1:prgmthetaFMT/g,"RectGC:CoordOn:GridOff:AxesOn Black:LabelOff:ExprOn:BorderColor 1:DetectAsymOn");
      fixedCode = fixedCode.replace(/2:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4");
      fixedCode = fixedCode.replace(/3:prgmthetaFMT/g,"GridOff:AxesOff:BorderColor 4:ZQuadrant1::264->Xmax:164->Ymax");
      return fixedCode;
}


function detectClearVars(code) {
  var fixedCode = code.replace(/prgmCLR0VAR/g,"DelVar ADelVar BDelVar CDelVar DDelVar EDelVar FDelVar GDelVar HDelVar IDelVar JDelVar KDelVar LDelVar MDelVar NDelVar ODelVar QDelVar RDelVar SDelVar TDelVar UDelVar VDelVar WDelVar XDelVar YDelVar ZDelVar PDelVar theta");
  return fixedCode;
}

function optimize(code) {
	var fixedCode = code;
	fixedCode = fixedCode.replace(/\u0029->/g,"->");
	fixedCode = fixedCode.replace(/"->/g,"->");
	fixedCode = fixedCode.replace(/}->/g,"->");
	
	fixedCode = fixedCode.replace(/0->A\n/g,"DelVar A");
	fixedCode = fixedCode.replace(/0->B\n/g,"DelVar B");
	fixedCode = fixedCode.replace(/0->C\n/g,"DelVar C");
	fixedCode = fixedCode.replace(/0->D\n/g,"DelVar D");
	fixedCode = fixedCode.replace(/0->E\n/g,"DelVar E");
	fixedCode = fixedCode.replace(/0->F\n/g,"DelVar F");
	fixedCode = fixedCode.replace(/0->G\n/g,"DelVar G");
	fixedCode = fixedCode.replace(/0->H\n/g,"DelVar H");
	fixedCode = fixedCode.replace(/0->I\n/g,"DelVar I");
	fixedCode = fixedCode.replace(/0->J\n/g,"DelVar J");
	fixedCode = fixedCode.replace(/0->K\n/g,"DelVar K");
	fixedCode = fixedCode.replace(/0->L\n/g,"DelVar L");
	fixedCode = fixedCode.replace(/0->M\n/g,"DelVar M");
	fixedCode = fixedCode.replace(/0->N\n/g,"DelVar N");
	fixedCode = fixedCode.replace(/0->O\n/g,"DelVar O");
	fixedCode = fixedCode.replace(/0->P\n/g,"DelVar P");
	fixedCode = fixedCode.replace(/0->Q\n/g,"DelVar Q");
	fixedCode = fixedCode.replace(/0->R\n/g,"DelVar R");
	fixedCode = fixedCode.replace(/0->S\n/g,"DelVar S");
	fixedCode = fixedCode.replace(/0->T\n/g,"DelVar T");
	fixedCode = fixedCode.replace(/0->U\n/g,"DelVar U");
	fixedCode = fixedCode.replace(/0->V\n/g,"DelVar V");
	fixedCode = fixedCode.replace(/0->W\n/g,"DelVar W");
	fixedCode = fixedCode.replace(/0->X\n/g,"DelVar X");
	fixedCode = fixedCode.replace(/0->Y\n/g,"DelVar Y");
	fixedCode = fixedCode.replace(/0->Z\n/g,"DelVar Z");
	fixedCode = fixedCode.replace(/0->theta\n/g,"DelVar theta");
	
	fixedCode = fixedCode.replace(/DelVar A\n/g,"DelVar A");
	fixedCode = fixedCode.replace(/DelVar B\n/g,"DelVar B");
	fixedCode = fixedCode.replace(/DelVar C\n/g,"DelVar C");
	fixedCode = fixedCode.replace(/DelVar D\n/g,"DelVar D");
	fixedCode = fixedCode.replace(/DelVar E\n/g,"DelVar E");
	fixedCode = fixedCode.replace(/DelVar F\n/g,"DelVar F");
	fixedCode = fixedCode.replace(/DelVar G\n/g,"DelVar G");
	fixedCode = fixedCode.replace(/DelVar H\n/g,"DelVar H");
	fixedCode = fixedCode.replace(/DelVar I\n/g,"DelVar I");
	fixedCode = fixedCode.replace(/DelVar J\n/g,"DelVar J");
	fixedCode = fixedCode.replace(/DelVar K\n/g,"DelVar K");
	fixedCode = fixedCode.replace(/DelVar L\n/g,"DelVar L");
	fixedCode = fixedCode.replace(/DelVar M\n/g,"DelVar M");
	fixedCode = fixedCode.replace(/DelVar N\n/g,"DelVar N");
	fixedCode = fixedCode.replace(/DelVar O\n/g,"DelVar O");
	fixedCode = fixedCode.replace(/DelVar P\n/g,"DelVar P");
	fixedCode = fixedCode.replace(/DelVar Q\n/g,"DelVar Q");
	fixedCode = fixedCode.replace(/DelVar R\n/g,"DelVar R");
	fixedCode = fixedCode.replace(/DelVar S\n/g,"DelVar S");
	fixedCode = fixedCode.replace(/DelVar T\n/g,"DelVar T");
	fixedCode = fixedCode.replace(/DelVar U\n/g,"DelVar U");
	fixedCode = fixedCode.replace(/DelVar V\n/g,"DelVar V");
	fixedCode = fixedCode.replace(/DelVar W\n/g,"DelVar W");
	fixedCode = fixedCode.replace(/DelVar X\n/g,"DelVar X");
	fixedCode = fixedCode.replace(/DelVar Y\n/g,"DelVar Y");
	fixedCode = fixedCode.replace(/DelVar Z\n/g,"DelVar Z");
	fixedCode = fixedCode.replace(/DelVar theta\n/g,"DelVar theta");
	
	return fixedCode;
}
