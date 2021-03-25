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
function kattintas() {
    jelenlegikerdes++;
    kérdésMegjelenítés(jelenlegikerdes);
    
}