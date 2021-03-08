function vraag(naam,leeftijd){
	document.write("hallo" + " " + naam + "," + " " + "uw leeftijd is" + " " + leeftijd + " " + "jaar" + " " + "<br>");
}
	var naam = prompt("hallo, wat is uw naam?");
	var leeftijd = prompt("wat is uw leeftijd?");

while(naam != "stop"){
	vraag(naam,leeftijd); 
	var naam = prompt("hallo, wat is uw naam?");
	var leeftijd = prompt("wat is uw leeftijd?");
}