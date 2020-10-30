var altura = 0, largura = 0, tempo = 20, vidas = 1, criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'nomal'){
criaMosquitoTempo = 1500
}
else if(nivel === 'dificil'){
criaMosquitoTempo = 1000
}
else if(nivel === 'chucknorris'){
criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    if(tempo < 1){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = --tempo
    }
}, 1000)

function posicaoRandomica(){
    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'gameOver.html'
        }
        else{
            document.getElementById('v' + vidas++).src = 'imagens/coracao_vazio.png'
        }
    }

    var posicaoX = Math.floor(Math.random() * (largura-90)) 
    var posicaoY = Math.floor(Math.random() * (altura - 90)) 

    console.log(posicaoX, posicaoY)
    
    //criar elemento html
    var mosquito = document.createElement('img')
    
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' '+ ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.ceil(Math.random() *3)
    return ('mosquito' + classe)
}

function ladoAleatorio(){
    var classe = Math.ceil(Math.random()*2)
    return ('lado' + classe)
}
     