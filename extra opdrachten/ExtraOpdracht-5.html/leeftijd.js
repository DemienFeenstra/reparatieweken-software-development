// jullie mogen hier niets aanpassen.
var age = prompt("Hoe oud ben je?");
var access = document.getElementById("access");

/****************************************************************
 Challenge:

 Jullie mogen alleen tussen de {} van de functie code toevoegen

 1) Als de persoon 18 jaar of ouder is dan mag hij naar binnen
 2) Als de persoon jonger is dan 18, krijgt hij de vraag:
    Heb je toestemming van je ouders? (denk aan confirm)
 3) Als hij wel toestemming heeft, mag hij naar binnen
 4) Heeft hij geen toestemming, mar hij dus niet naar binnen

 ***************************************************************/


// LET OP !! Alleen tussen de {} mag je jullie code plaatsen. 

function checkAge(age){
 // hier dus jullie code !!
 if(age < 18){
 	var ouders = confirm("heb je toestemming van je ouders?");
 	if(ouders == true){
 		return age;
 	}
 } else{
 	 if(age => 18){
 		return age;
 	 }
 	}
}


// jullie mogen hieronder niets aanpassen.

if(checkAge(age)){
  access.innerHTML = "Je mag naar binnen.";
  access.style.backgroundColor = "green";
} else {
  access.innerHTML = "Je bent te jong, en mag niet naar binnen.";
  access.style.backgroundColor = "red";
}