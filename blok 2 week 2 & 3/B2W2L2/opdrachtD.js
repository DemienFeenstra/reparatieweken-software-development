var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];
var spel = document.getElementById("spel");
var random = spellen[Math.floor(Math.random()*spellen.length)];
spel.innerHTML = random;