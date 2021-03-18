window.onload = () => {
    console.warn(":)");
let hova = document.getElementById("ide");
for (var s = 0; s < 10; s++) {

    let sor = document.createElement("div");
    sor.classList.add("sor");
    hova.appendChild(sor);

    for (var o = 0; o < 10; o++) {
        let szam = document.createElement("div");
        szam.classList.add("doboz");
        szam.style.background = `rgb(${255 / 10 * s},0,0)`;
        sor.appendChild(szam)
        szam.innerText = (s + 1) * (o + 1)
    }

    }
}
