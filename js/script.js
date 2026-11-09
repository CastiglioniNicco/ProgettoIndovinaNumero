let nDaIndovinare;
let nIns = [];
let tentRim = 7;
let iniziato = false;

function istruzioni() {
    let icona = document.getElementById("freccia");
    let istruzioni = document.getElementById("istruzioni");

    //icona
    icona.classList.toggle("bi-arrow-down-circle-fill");
    icona.classList.toggle("bi-arrow-right-circle");

    //testo
    istruzioni.classList.toggle("d-none");
}

function inizio() {
    if(iniziato) return;
    iniziato = true;
    let gioco = document.getElementById("gioco");
    nDaIndovinare = Math.floor(Math.random() * 101);
    console.log(nDaIndovinare);

    gioco.classList.remove("d-none");
}

function gioco() {
    let n = document.getElementById("input").value;
    //negativo
    if(n<=0) return;
    //doppione
    if(nIns.includes(n)) {
        suggerimento("Numero già inserito");
        return;
    }

    //riduce i tentativi
    tentativi();

    if(controllo(n)) {
        risultato("vittoria");
        return;
    }

    nIns.push(n);

    mostraNumeri();

    if(tentRim == 0) risultato("sconfitta");
}

function controllo(n) {
    if(n == nDaIndovinare) { //indovinato
        return true;
    }else if(n < nDaIndovinare){ //non indovinato
        suggerimento("il numero è più grande")
    }else {
        suggerimento("il numero è più piccolo")
    }
    return false;
}

function tentativi() {
    let tentativi = document.getElementById("tentativiRim");
    tentRim--;
    tentativi.innerHTML = tentRim;
}

function mostraNumeri() {
    let nProvati = document.getElementById("provati");
    nProvati.innerHTML = nIns.join(" - ");
}

function suggerimento(msg) {
    let suggerimento = document.getElementById("sugg");
    suggerimento.innerHTML = msg;
}

function risultato(id) {
    let schermata = document.getElementById(id);
    schermata.classList.remove("d-none");
    nascondiGioco();

    if(id == "sconfitta") {
        let nNonIndovinato = document.getElementById("numero");
        nNonIndovinato.innerHTML += nDaIndovinare;
    }else {
        let tentativiUtilizzati = document.getElementById("tentativiImpiegati");
        tentativiUtilizzati.innerHTML += 7 - tentRim;
    }
}

function nascondiGioco() {
    let gioco = document.getElementById("gioco");
    gioco.classList.add("d-none");
}