function tocaSom(idaudio) {
    let musica = document.querySelector(idaudio);

    if(musica.paused){
        musica.play();
    }else {
        musica.pause();
        musica.currentTime = 0;
    }

}