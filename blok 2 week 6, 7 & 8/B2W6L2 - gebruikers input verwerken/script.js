var vraag = prompt("hoeveel namen wil je invoeren? (minimaal 3)");
var naam = [];

if(vraag < 3){
	alert("ongeldig aantal!");
}
else{
for(i = 0; i<vraag; i++){
    ingevuldenamen = prompt("voer een naam in.");
    naam[naam.length] = ingevuldenamen;
}

for(i= 0; i<naam.length; i++){
    document.getElementById('normaal').innerHTML += naam[i] + ' '; 
}

for(i= naam.length -1; i>=0; i--){
    document.getElementById('omgekeerd').innerHTML += naam[i] + ' ';
}
}