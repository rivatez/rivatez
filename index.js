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
   
    }
    requestAnimationFrame(update);
}
music.load();
