var plus = document.getElementById("optellen");
var min = document.getElementById("aftrekken");
var keer = document.getElementById("vermenigvuldigen");
var gedeelddoor = document.getElementById("delen");

function optellen(arrayEen, arrayTwee){
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];

	for(i = 0; i < 10; i++){
		plus.innerHTML = plus.innerHTML + arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]) + "<br>";
	}
}
optellen();

function aftrekken(arrayEen, arrayTwee){
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];
	

	for(i = 0; i < 10; i++) {
		min.innerHTML = min.innerHTML + arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i] - arrayEen[i]) + "<br>";
	}
}
aftrekken();

function vermenigvuldigen(arrayEen, arrayTwee){
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];

	for(i = 0; i < 10; i++) {
		keer.innerHTML = keer.innerHTML + arrayEen[i] + " x " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]) + "<br>";
	}
}
vermenigvuldigen();

function delen(arrayEen, arrayTwee){
	arrayEen = [1,2,3,4,5,6,7,8,9,10];
	arrayTwee = [2,4,6,8,10,12,14,16,18,20];

	for(i = 0; i < 10; i++) {
		gedeelddoor.innerHTML = gedeelddoor.innerHTML + arrayTwee[i] + " : " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i]) + "<br>";
	}
}
delen();
