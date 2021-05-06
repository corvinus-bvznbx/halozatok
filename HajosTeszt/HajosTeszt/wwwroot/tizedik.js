
var kérdés;
var hotList = [];
var questionsInHotList = 3;
var displayedQuestions;
var numberOfQuestions;
var nextQuestion = 1;

var timeoutHandler;
timeoutHandler = setTimeout(előre, 3000);

let i = 1;

window.onload = init();

function kérdésMegjelenítés() {
    let kérdés = hotList[displayedQuestions].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image !=) {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép1").classList.remove("visible")
    }
    else {
        document.getElementById("kép1").classList.add("hidden")
    }    

function kerdesBetoltes(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(result => {
            if (!result.ok) {
                console.error(`Hibás letöltés: ${response.status}`)
            }
            else {
                return result.json()
            }
        }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}



        

function kattintasv() {


}
    function kattintase() {
    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
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
function válasz(v) {
    if (v == kérdések.correctAnswer) {
        document.getElementById("válasz" + v).classList.add("jo")
    }
    else {
        document.getElementById("válasz" + v).classList.add("rossz")
    }
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
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdések.answer1
    document.getElementById("válasz2").innerText = kérdések.answer2
    document.getElementById("válasz3").innerText = kérdések.answer3
    //jóVálasz = kérdés.correctAnswer;
    //document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdések.image;
    helyes = kérdések.correctAnswer;
    if (kérdés.image) {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép").classList.add("rejtett")
    }


    document.getElementById("válasz1").classList.remove("helyes", "rossz");
    document.getElementById("válasz2").classList.remove("helyes", "rossz");
    document.getElementById("válasz3").classList.remove("helyes", "rossz");


    console.log(helyes);
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
function választás(n) {
    if (n != jóVálasz) {
        document.getElementById(`válasz${n}`).classList.add("rossz");
        document.getElementById(`válasz${jóVálasz}`).classList.add("jo");
    }
    else {
        document.getElementById(`válasz${jóVálasz}`).classList.add("jo");
    }
}