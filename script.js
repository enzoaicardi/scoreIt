

function updateResults(v){

    var array = scoreIt(v, entries);

    var nav = document.querySelector('section nav');
    var html = '';

    for(var i=0; i<array.length; i++){

        if (array[i].score < 0) { i=array.length; continue; }
        var s = array[i].score;

        html += `<article>
            <h5>${array[i].str}</h5>
            <p>score<span style="background-color: hsl(${s*1.5}, 70%, 70%);">${s}</span></p>
        </article>`;

    }

    nav.innerHTML = html;

}

function search(e){
    var v = e.currentTarget.value;
    if(v){ updateResults(v); }
}

var entries = [
    "pomme",
    "banane",
    "poire",
    "prune",
    "pèche",
    "nectarine",
    "orange",
    "citron",
    "grenade",
    "abricot",
    "amande",
    "cassis",
    "cerise",
    "châtaigne",
    "fraise",
    "framboise",
    "fruit de la passion",
    "groseille",
    "kiwi",
    "mangue",
    "marron",
    "melon",
    "mûre",
    "myrtille",
    "noisette",
    "papaye",
    "pastèque",
    "raisin",
    "figue",
    "datte",
    "coing",
    "litchi"
];

updateResults('nothing');