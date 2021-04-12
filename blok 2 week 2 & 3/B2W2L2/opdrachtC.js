var array = [2,4,6,8];
var tafelnum1 = document.getElementById("tafeleen");
var tafelnum2 = document.getElementById("tafeltwee");
var tafelnum3 = document.getElementById("tafeldrie");
var tafelnum4 = document.getElementById("tafelvier");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");

function tafel1() {
	text1.innerHTML = "Tafel van " + array[0] + ":";
	for(i = 1; i < 11; i++) {
		tafelnum1.innerHTML = tafelnum1.innerHTML + [i] + " x " + array[0] + " = " + (i * array[0]) + "<br>";
	}
}
tafel1();

function tafel2() {
	text2.innerHTML = "Tafel van " + array[1] + ":";
	for(i = 1; i < 11; i++) {
		tafelnum2.innerHTML = tafelnum2.innerHTML + [i] + " x " + array[1] + " = " + (i * array[1]) + "<br>";
	}
}
tafel2();

function tafel3() {
	text3.innerHTML = "Tafel van " + array[2] + ":";
	for(i = 1; i < 11; i++) {
		tafelnum3.innerHTML = tafelnum3.innerHTML + [i] + " x " + array[2] + " = " + (i * array[2]) + "<br>";
	}
}
tafel3();

function tafel4() {
	text4.innerHTML = "Tafel van " + array[3] + ":";
	for(i = 1; i < 11; i++) {
		tafelnum4.innerHTML = tafelnum4.innerHTML + [i] + " x " + array[3] + " = " + (i * array[3]) + "<br>";
	}
}
tafel4();	