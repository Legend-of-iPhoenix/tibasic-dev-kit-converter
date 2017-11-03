function submitDirtyCode() {
	var code = document.getElementById("dirty-code").value;
	document.getElementById("charCount1").innerHTML = "Length: "+code.length+" characters";
	document.getElementById("charCount2").innerHTML = "Length: "+convertCode(code).length+" characters";
  
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
	
	fixedCode = fixedCode.replace(/\n^0->A$/gm,"DelVar A");
	fixedCode = fixedCode.replace(/\n^0->B$/gm,"DelVar B");
	fixedCode = fixedCode.replace(/\n^0->C$/gm,"DelVar C");
	fixedCode = fixedCode.replace(/\n^0->D$/gm,"DelVar D");
	fixedCode = fixedCode.replace(/\n^0->E$/gm,"DelVar E");
	fixedCode = fixedCode.replace(/\n^0->F$/gm,"DelVar F");
	fixedCode = fixedCode.replace(/\n^0->G$/gm,"DelVar G");
	fixedCode = fixedCode.replace(/\n^0->H$/gm,"DelVar H");
	fixedCode = fixedCode.replace(/\n^0->I$/gm,"DelVar I");
	fixedCode = fixedCode.replace(/\n^0->J$/gm,"DelVar J");
	fixedCode = fixedCode.replace(/\n^0->K$/gm,"DelVar K");
	fixedCode = fixedCode.replace(/\n^0->L$/gm,"DelVar L");
	fixedCode = fixedCode.replace(/\n^0->M$/gm,"DelVar M");
	fixedCode = fixedCode.replace(/\n^0->N$/gm,"DelVar N");
	fixedCode = fixedCode.replace(/\n^0->O$/gm,"DelVar O");
	fixedCode = fixedCode.replace(/\n^0->P$/gm,"DelVar P");
	fixedCode = fixedCode.replace(/\n^0->Q$/gm,"DelVar Q");
	fixedCode = fixedCode.replace(/\n^0->R$/gm,"DelVar R");
	fixedCode = fixedCode.replace(/\n^0->S$/gm,"DelVar S");
	fixedCode = fixedCode.replace(/\n^0->T$/gm"DelVar T");
	fixedCode = fixedCode.replace(/\n^0->U$/gm,"DelVar U");
	fixedCode = fixedCode.replace(/\n^0->V$/gm,"DelVar V");
	fixedCode = fixedCode.replace(/\n^0->W$/gm,"DelVar W");
	fixedCode = fixedCode.replace(/\n^0->X$/gm,"DelVar X");
	fixedCode = fixedCode.replace(/\n^0->Y$/gm,"DelVar Y");
	fixedCode = fixedCode.replace(/\n^0->Z$/gm,"DelVar Z");
	fixedCode = fixedCode.replace(/\n^0->theta$/gm,"DelVar theta");
	
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
