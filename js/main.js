function submitDirtyCode() {
	var code = document.getElementById("dirty-code").value;
	document.getElementById("charCount1").value = "Length: "+code.length+" characters";
	document.getElementById("charCount2").value = "Length: "+convertCode(code).length+" characters";
  
  if (code = '')
    alert("Please gimme code; I'm hungry :P");
}

function convertCode(codeToConvert) {
  var cleanCode = optimize(detectClearVars(detectFormatGraphScreen(codeToConvert)));
  document.getElementById("clean-code").value = cleanCode;
  return cleanCode;
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
	
	fixedCode = fixedCode.replace(/\n[^\}]->A\n/g,"DelVar A");
	fixedCode = fixedCode.replace(/\n[^\}]->B\n/g,"DelVar B");
	fixedCode = fixedCode.replace(/\n[^\}]->C\n/g,"DelVar C");
	fixedCode = fixedCode.replace(/\n[^\}]->D\n/g,"DelVar D");
	fixedCode = fixedCode.replace(/\n[^\}]->E\n/g,"DelVar E");
	fixedCode = fixedCode.replace(/\n[^\}]->F\n/g,"DelVar F");
	fixedCode = fixedCode.replace(/\n[^\}]->G\n/g,"DelVar G");
	fixedCode = fixedCode.replace(/\n[^\}]->H\n/g,"DelVar H");
	fixedCode = fixedCode.replace(/\n[^\}]->I\n/g,"DelVar I");
	fixedCode = fixedCode.replace(/\n[^\}]->J\n/g,"DelVar J");
	fixedCode = fixedCode.replace(/\n[^\}]->K\n/g,"DelVar K");
	fixedCode = fixedCode.replace(/\n[^\}]->L\n/g,"DelVar L");
	fixedCode = fixedCode.replace(/\n[^\}]->M\n/g,"DelVar M");
	fixedCode = fixedCode.replace(/\n[^\}]->N\n/g,"DelVar N");
	fixedCode = fixedCode.replace(/\n[^\}]->O\n/g,"DelVar O");
	fixedCode = fixedCode.replace(/\n[^\}]->P\n/g,"DelVar P");
	fixedCode = fixedCode.replace(/\n[^\}]->Q\n/g,"DelVar Q");
	fixedCode = fixedCode.replace(/\n[^\}]->R\n/g,"DelVar R");
	fixedCode = fixedCode.replace(/\n[^\}]->S\n/g,"DelVar S");
	fixedCode = fixedCode.replace(/\n[^\}]->T\n/g,"DelVar T");
	fixedCode = fixedCode.replace(/\n[^\}]->U\n/g,"DelVar U");
	fixedCode = fixedCode.replace(/\n[^\}]->V\n/g,"DelVar V");
	fixedCode = fixedCode.replace(/\n[^\}]->W\n/g,"DelVar W");
	fixedCode = fixedCode.replace(/\n[^\}]->X\n/g,"DelVar X");
	fixedCode = fixedCode.replace(/\n[^\}]->Y\n/g,"DelVar Y");
	fixedCode = fixedCode.replace(/\n[^\}]->Z\n/g,"DelVar Z");
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
