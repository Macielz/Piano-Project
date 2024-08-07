function playNote(event){ // Relaciona as funções
let keyNote = getTypeAndKey(event)

let info = document.querySelector(`.key[data-key="${keyNote}"]`)

    if(!info){
        return;
    }

playMusic(keyNote)
addClass(info)
checkRemoveClass(info)
}

function playMusic(keyNote){ // Toca a musica
    const audio = document.querySelector(`audio[data-key="${keyNote}"]`)
    audio.currentTime = 0;
    audio.play();
}


function getTypeAndKey(event){ // Identificação de Chamada de Evento
let isClick = event.type

    if(isClick === "click"){
        let click = event.target.dataset.key
        return click;
    } else{
        let keyDownBoard = event.keyCode
        return keyDownBoard;
    }    
}

function addClass(info){ // Adiciona a class para dar animação
    eventClass = info.classList.add("playing")
}

function removeClass(event){// Remove a class para dar animação
    eventClass = event.target.classList.remove("playing")
}

function eventLister(){ // Captura os eventos
    keys = document.querySelectorAll(".key")
    keys.forEach(key =>{
        document.addEventListener("click", playNote)
        document.addEventListener("transitionend", removeClass )
    })
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", eventLister)




