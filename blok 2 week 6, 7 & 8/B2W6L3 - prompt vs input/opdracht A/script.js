var getal = prompt("Voer een getal in");
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var tekst = "";

if(getal > 20){
	alert("je kan alleen getal 0 t/m 20 invoeren.");
}
else{
for(i=0; i<=getal; i++){
    array[i] = i
}
document.getElementById('array').innerHTML = "Array : " + array

for(i=0; i<=getal; i++){
    tekst = "" + tekst + array[i]
    var piramide = document.createElement('p');
    piramide.innerHTML = tekst
    document.getElementById('piramide').appendChild(piramide);
}
}