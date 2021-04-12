var dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

for(i = 0; i < 7; i++) {
	alledagen.innerHTML = alledagen.innerHTML + dagen[i] + ", ";
}

for(i = 0; i < 5; i++) {
	werkdagen.innerHTML = werkdagen.innerHTML + dagen[i] + ", ";
}

for(i = 5; i < 7; i++) {
	weekenddagen.innerHTML = weekenddagen.innerHTML + dagen[i] + ", ";
}

for(i = 6; i > -1; i--) {
	dagenomgekeerd.innerHTML = dagenomgekeerd.innerHTML + dagen[i] + ", ";
}

for(i = 4; i > -1; i--) {
	werkdagenomgekeerd.innerHTML = werkdagenomgekeerd.innerHTML + dagen[i] + ", ";
}

for(i = 6; i > 4; i--) {
	weekenddagenomgekeerd.innerHTML = weekenddagenomgekeerd.innerHTML + dagen[i] + ", ";
}