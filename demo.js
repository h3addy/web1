//single line
/*
multi line
*/

function add(){
	//var a = document.getElementById("no1").value;
	//var b = document.getElementById("no2").value;
	var a = 10;
	var b ="100";
	var c = a + b;
	document.getElementById("res").value = c;
	document.getElementById("res").style.color = "red";
	console.log(c);
	alert(isNaN(a));
}
function sub(){
	var a = document.getElementById("no1").value;
	var b = document.getElementById("no2").value;
	var c = parseInt(a) - parseInt(b);
	document.getElementById("res").value = c;
}
function mul(){
	var a = document.getElementById("no1").value;
	var b = document.getElementById("no2").value;
	var c = a * b;
	document.getElementById("res").value = c;
}
function div(){
	var a = document.getElementById("no1").value;
	var b = document.getElementById("no2").value;
	var c = parseInt(a) / parseInt(b);
	document.getElementById("res").value = c;
}
function rem(){
	var a = document.getElementById("no1").value;
	var b = document.getElementById("no2").value;
	var c = parseInt(a) % parseInt(b);
	document.getElementById("res").value = c;
}
function sqr(){
	var a = document.getElementById("no1").value;
	var b = document.getElementById("no2").value;
	var c = parseInt(a) ** parseInt(b);
	document.getElementById("res").value = c;
}
function concate(){
	var a = document.getElementById("no1").value;
	var b = document.getElementById("no2").value;
	var c = a + b;
	document.getElementById("res").value = c;
}

function radioFn(){
	var rd1 = document.getElementById("rd1");
	var rd2 = document.getElementById("rd2");

	if(rd1.checked == true)
		alert(rd1.value);
	else if(rd2.checked == true)
		alert(rd2.value);
	else
		alert("Single");
}

function fn1(){
	this.fn2 = function(){
		alert(document.domain);
	}

}

function selectFn(){
	var sel1 = document.getElementById("select1");
	alert(sel1.value);
}

function changeColor(){
	var pt = document.getElementsByTagName("p");
	pt[0].style.color = "red";
	pt[1].style.color = "yellow";
	pt[2].style.color = "blue";
	pt[3].style.color = "green";
}

function setNewImg(){
	document.getElementById("img1").src="xxxxx.jpg"
}
function setOldImg(){
	document.getElementById("img1").src="side  1.jpg"
}

var ID = 0;
var opa = 0;
function trig1(){
	window.clearTimeout(ID);
	ID = window.setTimeout(fadeIn,10);
}
function fadeIn(){
	var img12 = document.getElementById("img12");
	opa = Number(window.getComputedStyle(img12).getPropertyValue("opacity"));
	
	if(opa > 0){
		opa = opa - 0.2;
		img12.style.opacity = opa;
	}
	else{
		window.clearTimeout(ID);
	}
}
function trig2(){
	window.clearTimeout(ID);
	ID = window.setTimeout(fadeOut,10);
}
function fadeOut(){
	var img12 = document.getElementById("img12");
	opa = Number(window.getComputedStyle(img12).getPropertyValue("opacity"));
	
	if(opa < 1){
		opa = opa + 0.2;
		img12.style.opacity = opa;
	}
	else{
		window.clearTimeout(ID);
	}
}

var wid = 100;
function trig3(){
	window.clearTimeout(ID);
	ID = window.setInterval(Zoomin,20);
}
function Zoomin(){
	if(wid < 300){
		wid = wid + 2;
		document.getElementById("img12").style.width = wid;
		console.log(wid);
	}
	else{
		window.clearTimeout(ID);
	}
}
function trig4(){
	window.clearTimeout(ID);
	ID = window.setInterval(Zoomout,20);
}
function Zoomout(){	
	if(wid > 100){
		wid = wid - 2;
		document.getElementById("img12").style.width = wid;
		console.log(wid);
	}
	else{
		window.clearTimeout(ID);
	}
}
