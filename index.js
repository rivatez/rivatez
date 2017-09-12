// init vars
var music = document.querySelector("#eccojam");
var output = document.querySelector("#text");
var playing = false;

music.addEventListener("progress", function(){
    if (music.readyState === 4){
        document.querySelector("#percent").innerText = (music.buffered.end(0) / music.duration)*100;
    }
});

music.addEventListener("canplaythrough", function(){requestAnimationFrame(update)});

function update() {
    if (playing === false) {
        music.play();
        document.body.removeChild(document.querySelector("#coverup"));
        playing = true;
    }
    
    //cleaner loop
    if (music.currentTime / music.duration >= 0.99) { // HOW DOES VINE GET ITS LOOPS SO PERFECT
        music.currentTime = 0.01;
        music.play();
    }
    
    /* This is the part where we check the lyric position, Meticulously calculated
    to be as precise as my ear could get it. */
    if (music.currentTime / music.duration > 0.05 && music.currentTime / music.duration < 0.08) {
        output.innerText = "BEWARE";
    }
    if (music.currentTime / music.duration > 0.08 && music.currentTime / music.duration < 0.14) {
        output.innerText = "THE";
    }
    if (music.currentTime / music.duration > 0.14 && music.currentTime / music.duration < 0.18) {
        output.innerText = "LOLLIPOP";
    }
    if (music.currentTime / music.duration > 0.18 && music.currentTime / music.duration < 0.21) {
        output.innerText = "";
    }
    if (music.currentTime / music.duration > 0.21 && music.currentTime / music.duration < 0.24) {
        output.innerText = "OF";
    }
    if (music.currentTime / music.duration > 0.24 && music.currentTime / music.duration < 0.33) {
        output.innerText = "MEDIOCRITY";
    }
    if (music.currentTime / music.duration > 0.33 && music.currentTime / music.duration < 0.525) {
        output.innerText = "JUST";
    }
    if (music.currentTime / music.duration > 0.525 && music.currentTime / music.duration < 0.56) {
        output.innerText = "ONE";
    }
    if (music.currentTime / music.duration > 0.56 && music.currentTime / music.duration < 0.59) {
        output.innerText = "LICK";
    }
    if (music.currentTime / music.duration > 0.59 && music.currentTime / music.duration < 0.62) {
        output.innerText = "AND";
    }
    if (music.currentTime / music.duration > 0.62 && music.currentTime / music.duration < 0.65) {
        output.innerText = "YOU'LL";
    }
    if (music.currentTime / music.duration > 0.65 && music.currentTime / music.duration < 0.68) {
        output.innerText = "SUCK";
    }
    if (music.currentTime / music.duration > 0.68 && music.currentTime / music.duration < 0.71) {
        output.innerText = "FOREVER";
    }
    if (music.currentTime / music.duration > 0.71 && music.currentTime / music.duration < 0.74) {
        output.innerText = "SUCK";
    }
    if (music.currentTime / music.duration > 0.74 && music.currentTime / music.duration < 0.84) {
        output.innerText = "FOREVER";
    }
    if (music.currentTime / music.duration > 0.84 && music.currentTime / music.duration < 1) {
        output.innerText = "SUCK";
    }
    requestAnimationFrame(update);
}

//requestAnimationFrame(update);
music.load();