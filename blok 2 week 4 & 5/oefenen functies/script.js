// return in functie
function MyFunction(name,lastname) {
  return "Ik ben " + name + " " + lastname;
}
document.getElementById("naam").innerHTML = MyFunction("Demien","Feenstra");



// global scoping met return
var getallen = som(4,4)
function som(getal1,getal2){
	return "Ik ben" + " " + getal1 * getal2 + " " + "jaar oud";
}
document.getElementById("eindgetal").innerHTML = getallen;



// local scoping
function mijnWoonplaats(woon,plaats){
var woonplaats = woon + plaats;
document.write("Ik woon in" + " " + woonplaats);
}
mijnWoonplaats("Dord","recht");