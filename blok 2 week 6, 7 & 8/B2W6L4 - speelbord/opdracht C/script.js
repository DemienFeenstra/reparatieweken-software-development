function check() {
    var word = document.getElementById("woord").value
    var inputWord = document.getElementById("letter").value
    word = word.split("")
    inputWord = inputWord.split("")
    for (i = 0; i < word.length; i++) {
        document.getElementById(i).innerHTML = inputWord[i];
        document.getElementById(i).style.backgroundColor = "white"
        if (word[i] == inputWord[i]) {
            document.getElementById(i).style.backgroundColor = "green"
            word[i] = ""
            inputWord[i] = ""
        }
    }
    for (a = 0; a < word.length; a++) {
        for (b = 0; b < inputWord.length; b++) {
            if (word[a] != "" && word[a] == inputWord[b]) {
                document.getElementById(b).style.backgroundColor = "yellow"
                word[a] = ""
                inputWord[b] = ""
            }
        }
    }
}