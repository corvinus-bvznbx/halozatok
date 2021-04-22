window.onload = letoltes()
var kérdések;
var jelenlegikerdes = 0;



function letoltes() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
        kérdésMegjelenítés(0);
    }
}

function kérdésMegjelenítés (k) {
    let ide_kérdések = document.getElementById("kérdés_szöveg");
    ide_kérdések.innerHTML = kérdések[k].questionText;
    console.log(`${kérdések.length}kérdés érkezett}`)

    for (var i = 1; i < 4; i++) {
        //console.log(kérdés[i].questionText)
        let elem_kérdések = document.getElementById("válasz" + i)
        elem_kérdések.innerText = kérdések[k]["answer"+i]

    }
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image;
}
function kattintasv() {
    document.getElementById("válasz1").style.backgroundColor = "peachpuff";
    document.getElementById("válasz2").style.backgroundColor = "peachpuff";
    document.getElementById("válasz3").style.backgroundColor = "peachpuff";

    document.getElementById("válasz1").style.pointerEvents = 'auto';
    document.getElementById("válasz2").style.pointerEvents = 'auto';
    document.getElementById("válasz3").style.pointerEvents = 'auto';
    if (jelenlegikerdes == 0) {
        jelenlegikerdes = kérdések.length - 1;
        kérdésMegjelenítés(jelenlegikerdes);
    }
    else {
        jelenlegikerdes--;
        kérdésMegjelenítés(jelenlegikerdes);;
    }
    //jelenlegikerdes++;
    //kérdésMegjelenítés(jelenlegikerdes);
}
function kattintase() {
    document.getElementById("válasz1").style.backgroundColor = "peachpuff";
    document.getElementById("válasz2").style.backgroundColor = "peachpuff";
    document.getElementById("válasz3").style.backgroundColor = "peachpuff";

    document.getElementById("válasz1").style.pointerEvents = 'auto';
    document.getElementById("válasz2").style.pointerEvents = 'auto';
    document.getElementById("válasz3").style.pointerEvents = 'auto';
    if (jelenlegikerdes == kérdések.length - 1) {
        jelenlegikerdes = 0;
        kérdésMegjelenítés(jelenlegikerdes);;

    }
    else {
        jelenlegikerdes++;
        kérdésMegjelenítés(jelenlegikerdes);
    }

}
document.getElementById("válasz1").onclick = () => {

    if (kérdések[kérdésSorszám].correctAnswer == 1) {
        document.getElementById("válasz1").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz1").style.background = "lightcoral";
        document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
    }

    document.getElementById("válasz1").style.pointerEvents = 'none';
    document.getElementById("válasz2").style.pointerEvents = 'none';
    document.getElementById("válasz3").style.pointerEvents = 'none';

}

document.getElementById("válasz2").onclick = () => {

    if (kérdések[kérdésSorszám].correctAnswer == 2) {
        document.getElementById("válasz2").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz2").style.background = "lightcoral";
        document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
    }

    document.getElementById("válasz1").style.pointerEvents = 'none';
    document.getElementById("válasz2").style.pointerEvents = 'none';
    document.getElementById("válasz3").style.pointerEvents = 'none';
}

document.getElementById("válasz3").onclick = () => {

    if (kérdések[kérdésSorszám].correctAnswer == 3) {
        document.getElementById("válasz3").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz3").style.background = "lightcoral";
        document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
    }

    document.getElementById("válasz1").style.pointerEvents = 'none';
    document.getElementById("válasz2").style.pointerEvents = 'none';
    document.getElementById("válasz3").style.pointerEvents = 'none';
}

fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
    );

fetch('/questions/1')
    .then(response => response.json())
    .then(data => kerdesMegjelenites(data)
    );
function kerdesMegjelenites(kérdések) {
    console.log(kérdések)
    document.getElementById("kérdés_szöveg").innerText = kérdések.questionText
    document.getElementById("válasz1").innerText = kérdések.answer1
    document.getElementById("válasz2").innerText = kérdések.answer2
    document.getElementById("válasz3").innerText = kérdések.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdések.image;
}
function kerdesBetoltes(id) {
    fetch('/questions/${id}')
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kerdesMegjelenites(data));
}