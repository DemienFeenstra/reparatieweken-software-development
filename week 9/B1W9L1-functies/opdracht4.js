var num;

while(!num) {
    num = prompt("Vul het aantal tafels wat je wilt in.");

    if(num.toLowerCase() == "stop") {
        alert("Je hebt geannuleerd.");
    } else if(!num || !Number(num)) {
        alert("Ongeldig getal. Probeer het nog eens.");
        num = false;
    } else if(parseInt(num) < 1 || parseInt(num) > 10) {
        alert("Je kunt alleen getallen 1 t/m 10 invoeren.");
        num = false;
    } else {
        num = parseInt(num);
        printTafels(num);
    };  
};

function printTafels(num) {
    for(i = 1; (i < num + 1); i++) {
        for(j = 1; j < 11; j++) {
            document.write(j + " x " + i + " = " + (j * i) + "<br>");
        };
        document.write("<br>");
    }; 
};